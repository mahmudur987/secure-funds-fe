import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";

type PrivateRouteProps = {
  roles?: string[];
};

export default function PrivateRoute({ roles }: PrivateRouteProps) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const { data, isLoading, isError } = useGetProfileQuery(undefined);

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true }); // not logged in → login
      return;
    }

    if (!isLoading) {
      if (isError || !data?.data) {
        // failed to fetch profile → logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/", { replace: true });
      } else if (roles && !roles.includes((data.data as User).role)) {
        // role not allowed → unauthorized

        console.log((data.data as User).role);
        console.log(roles);

        navigate("/unauthorized", { replace: true });
      }
    }
  }, [token, isLoading, isError, data, roles, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return <Outlet />;
}
