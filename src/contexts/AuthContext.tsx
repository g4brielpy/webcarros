import { createContext } from "react";

export type userProps = { uid: string; name?: string; email: string } | null;

export interface AuthContextType {
  user: userProps;
  signed: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
