/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store"; // adjust import for your store

interface PrivateRouteProps {
  roles: string[]; // allowed roles (optional)
}

export default function PrivateRoute({ roles }: PrivateRouteProps) {
  //   const { user, token } = useSelector((state: RootState) => state.auth);
  const { user, token }: { user: { role: string }; token: any } = {
    user: { role: "user" },
    token: " ",
  };

  if (!token) {
    // not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user?.role)) {
    // role not allowed → redirect unauthorized
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ allowed → render children routes
  return <Outlet />;
}
