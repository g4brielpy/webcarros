import { ReactNode, useEffect, useState } from "react";
import { AuthContext, userProps } from "./AuthContext";

import { auth } from "../firebase/firebaseConnection";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userProps>(null);
  const signed: boolean = !!user;

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(
          "Usuário logado com sucesso: " + userCredential.user.displayName
        );
      })
      .catch((error) => {
        console.log("Erro ao fazer login:", error.message);
      });
  }

  function logout() {
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
    <AuthContext.Provider value={{ user, signed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
