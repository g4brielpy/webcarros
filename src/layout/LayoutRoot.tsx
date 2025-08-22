import { Outlet } from "react-router";

export default function LayoutRoot() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}
