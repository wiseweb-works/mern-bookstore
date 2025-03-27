import { Navigate, Outlet } from "react-router";
import type { PropsWithChildren } from "react";

const AdminRoute = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin" />;
  }
  return children ? children : <Outlet />;
};

export default AdminRoute;
