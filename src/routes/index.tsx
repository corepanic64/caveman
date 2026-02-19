// import AuthGuard from "@/guards/auth-guard";
// import ClientGuard from "@/guards/client-guard";
// import AUTH_ROUTES from "@/pages/auth/routes";
// import CLIENT_ROUTES from "@/pages/client/routes";
// import PageNotFound from "@/shared/ui/page-not-found";
import AuthGuard from "@/guard/authGuard";
import ClientGuard from "@/guard/clientGuard";
import AUTH_ROUTES from "@/pages/auth/routes";
import CLIENT_ROUTES from "@/pages/client/routes";
import { type RouteObject } from "react-router-dom";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <ClientGuard />,
    children: CLIENT_ROUTES as RouteObject[],
  },
  {
    path: "auth",
    element: <AuthGuard />,
    children: AUTH_ROUTES,
  },
  {
    path: "*",
    element: <>Page not found</>,
  },
];

export default ROUTES;
