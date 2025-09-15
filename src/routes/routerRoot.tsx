import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import CarDetail from "../pages/CarDetail";
import Dashboard from "../pages/Dashboard";
import NewCar from "../pages/Dashboard/NewCar";
import Login from "../pages/Login";
import Register from "../pages/Login/Register";

import LayoutRoot from "../layout/LayoutRoot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <CarDetail />,
      },

      {
        path: "dashboard/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/newcar",
        element: (
          <PrivateRoute>
            <NewCar />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
