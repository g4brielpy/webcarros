import { ReactNode, useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authContext = useContext<AuthContextType | null>(AuthContext);

  if (!authContext) return null;

  if (authContext.loading) {
    return (
      <div className="flex items-center justify-center h-dvh text-2xl font-bold">
        Carregando...
      </div>
    );
  }

  if (!authContext.signed) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
}
