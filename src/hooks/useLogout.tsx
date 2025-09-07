// src/hooks/useLogoutOnMount.ts
import { useEffect, useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";

export function useLogout() {
  const auth = useContext<AuthContextType | null>(AuthContext);

  useEffect(() => {
    auth?.logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
