import { Outlet } from "react-router";

import { Header } from "../components/Header";

export default function AppLayout() {
  return (
    <div className="bg-gray-200 min-h-dvh flex flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
