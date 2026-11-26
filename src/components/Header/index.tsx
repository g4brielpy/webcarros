import { Link } from "react-router";

import logoWebCarros from "../../assets/logoWebCarros.svg";
import { FiUser } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

export function Header() {
  const isLogin = true;
  return (
    <header className="w-full h-18 border-b border border-[#7D7D7D] flex items-center">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-6">
        <Link to={"/"}>
          <img src={logoWebCarros} alt="WebCarros" className="h-10 w-auto" />
        </Link>

        {isLogin ? (
          <Link to={""} className="p-2 rounded-full border border-[#7D7D7D]">
            <FiUser size={24} />
          </Link>
        ) : (
          <Link to={""} className="p-2 rounded-full border border-[#7D7D7D]">
            <FiLogIn size={24} />
          </Link>
        )}
      </nav>
    </header>
  );
}
