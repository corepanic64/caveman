import { MainLayout } from "@/layout/mainLayout";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";

const ClientGuard = () => {
  const isAuth = false;
  if (!isAuth) return <Navigate to="/auth/login" />;
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <MainLayout />
    </Suspense>
  );
};

export default ClientGuard;
