import { createBrowserRouter } from "react-router";

import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CarDetails from "../pages/CarDetails";
import MyCars from "../pages/Dashboard/MyCars";
import NewCars from "../pages/Dashboard/NewCars";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "details/:id",
        Component: CarDetails,
      },
      {
        path: "dashboard/my-cars",
        Component: MyCars,
      },
      {
        path: "dashboard/new-cars",
        Component: NewCars,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
