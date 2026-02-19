import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const profile = false;
  if (profile) return <Navigate to="/" />;

  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <Outlet />
    </Suspense>
  );
};

export default AuthGuard;
