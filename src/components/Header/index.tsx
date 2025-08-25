import { Link } from "react-router";

import { FiUser, FiLogIn } from "react-icons/fi";

export default function Header() {
  const signed = false;

  return (
    <header className="h-16 px-4 flex items-center justify-center shadow-md">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src="/public/webCarrosLogo.svg" alt="web Carros Logo" />
        </Link>

        {signed ? (
          <Link to={"/dashboard"}>
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
