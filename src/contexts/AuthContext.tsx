import { createContext, ReactNode, useState } from "react";

type userProps = { uid: string; name?: string; email: string } | null;

interface AuthContextType {
  user: userProps;
  signed: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userProps>(null);
  const signed: boolean = !!user;

  return (
    <AuthContext.Provider value={{ user, signed }}>
      {children}
    </AuthContext.Provider>
  );
};
