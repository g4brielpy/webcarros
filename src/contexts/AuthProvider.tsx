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
  const signed: boolean = !!user;

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
        throw new Error(error.message);
      }
      throw error;
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
        throw new Error(error.message);
      }
      throw error;
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
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signed, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
