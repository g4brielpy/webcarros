import { ReactNode, useEffect, useState } from "react";
import { AuthContext, userProps } from "./AuthContext";

import { auth } from "../firebase/firebaseConnection";
import { FirebaseError } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  updateProfile,
  signOut,
} from "firebase/auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userProps>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function login(
    email: string,
    password: string
  ): Promise<UserCredential | Error> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw error;
      }
      throw new Error("Erro inesperado ao tentar fazer login");
    }
  }

  async function registerUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserCredential | Error> {
    try {
      const profileSucess = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(profileSucess.user, { displayName: name });
      return profileSucess;
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw error;
      }
      throw new Error("Erro inesperado ao tentar fazer login");
    }
  }

  function logout(): void {
    signOut(auth);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userState) => {
      if (userState) {
        setUser({
          uid: userState.uid,
          email: userState.email || "",
          name: userState.displayName || "",
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, loading, login, registerUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
