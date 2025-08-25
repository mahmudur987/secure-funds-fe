import { Role } from "@/constant";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import { Navigate } from "react-router";

// adjust import

const DashboardRedirect = () => {
  const { data, isLoading, isError } = useGetProfileQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // or a proper spinner component
  }

  if (isError) {
    return <Navigate to="/" replace />;
  }

  const user = data?.data;
  if (!user) {
    return <Navigate to="/" replace />;
  }

  switch (user.role) {
    case Role.admin:
      return <Navigate to="/dashboard/admin" replace />;
    case Role.agent:
      return <Navigate to="/dashboard/agent" replace />;
    case Role.user:
      return <Navigate to="/dashboard/user" replace />;
    default:
      return <Navigate to="/unauthorized" replace />;
  }
};

export default DashboardRedirect;
