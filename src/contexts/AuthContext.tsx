import { UserCredential } from "firebase/auth";
import { createContext } from "react";

export type userProps = { uid: string; name?: string; email: string } | null;

export interface AuthContextType {
  user: userProps;
  signed: boolean;
  login: (email: string, password: string) => Promise<UserCredential | Error>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
