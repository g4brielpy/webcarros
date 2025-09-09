import { Link } from "react-router";

export function HeaderDashboard() {
  return (
    <header
      className="
    bg-[#E11138] text-white shadow-sm 
    hover:bg-[#c70f30]
    h-11 px-6 rounded-sm font-semibold text-lg
    transition-all duration-200 ease-in-out
    flex items-center
    "
    >
      <nav className="space-x-6">
        <Link to={"/dashboard"}>Dashbord</Link>
        <Link to={"/dashboard/newcar"}>Novo carro</Link>
      </nav>
    </header>
  );
}
