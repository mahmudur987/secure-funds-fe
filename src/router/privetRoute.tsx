/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";
import { Navigate, Outlet } from "react-router";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store"; // adjust import for your store

interface PrivateRouteProps {
  roles: string[]; // allowed roles (optional)
}

export default function PrivateRoute({ roles }: PrivateRouteProps) {
  const { data, isLoading } = useGetProfileQuery(undefined);
  const user = data?.data as User;
  const token = localStorage.getItem("accessToken");

  console.log("data", data);

  if (!token) {
    // not logged in → redirect to login
    return <Navigate to="/" replace />;
  }

  if (roles && !isLoading && !roles.includes(user.role)) {
    // role not allowed → redirect unauthorized
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ allowed → render children routes
  return <Outlet />;
}
