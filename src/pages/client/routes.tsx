import type { RouteObject } from "react-router-dom";
import Dashboard from "./dashboard";

const CLIENT_ROUTES: RouteObject[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];

export default CLIENT_ROUTES;
