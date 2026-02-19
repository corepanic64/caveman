import ROUTES from "@/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(ROUTES);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
