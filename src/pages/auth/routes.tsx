import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const AUTH_ROUTES: RouteObject[] = [
  {
    index: true,
    path: "login",
    Component: lazy(async () => await import("./login")),
  },
  {
    index: true,
    path: "register",
    Component: lazy(async () => await import("./register")),
  },
];

export default AUTH_ROUTES;
