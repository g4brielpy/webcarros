import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";

import { Link } from "react-router";

import { FiUser, FiLogIn } from "react-icons/fi";

export default function Header() {
  const authContext = useContext<AuthContextType | null>(AuthContext);

  return (
    <header className="h-16 px-4 flex items-center justify-center shadow-md">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src="/public/webCarrosLogo.svg" alt="web Carros Logo" />
        </Link>

        {authContext?.signed ? (
          <Link to={"/dashboard/newcar"}>
            <FiUser size={24} />
          </Link>
        ) : (
          <Link to={"/login"}>
            <FiLogIn size={24} />
          </Link>
        )}
      </div>
    </header>
  );
}
