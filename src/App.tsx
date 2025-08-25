import { RouterProvider } from "react-router";
import router from "./routes/routerRoot";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
