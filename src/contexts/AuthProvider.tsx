import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConnection";
import { AuthContext, userProps } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userProps>(null);
  const signed: boolean = !!user;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userState) => {
      if (userState) {
        console.log("Tem usuário logado " + userState.email);
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
    <AuthContext.Provider value={{ user, signed }}>
      {children}
    </AuthContext.Provider>
  );
};
