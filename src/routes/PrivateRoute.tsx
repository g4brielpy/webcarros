import { ReactNode, useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authContext = useContext<AuthContextType | null>(AuthContext);

  if (!authContext?.signed) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
}
