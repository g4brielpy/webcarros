import { Outlet } from "react-router";
import Header from "../components/Header";

export default function LayoutRoot() {
  return (
    <div className="bg-amber-300 min-h-dvh">
      <Header />
      <Outlet />
    </div>
  );
}
