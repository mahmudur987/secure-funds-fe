import { AppSidebar } from "@/components/common/app-sidebar";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

export default function DashboardLayout() {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isError, isSuccess, refetch } =
    useGetProfileQuery(undefined, {
      skip: !token,
    });

  const user = data?.data as User | undefined;

  // 🚀 Handle redirects inside useEffect
  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
      return;
    }

    if (!isLoading && !isFetching) {
      if (isError || (isSuccess && !user)) {
        <LoadingSpinner />;
      }
    }
  }, [
    token,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    user,
    navigate,
    refetch,
  ]);

  // 🚀 Show spinner while waiting
  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  // 🚀 Render dashboard if user exists
  if (user) {
    return (
      <main className="container mx-auto min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </main>
    );
  }

  // default → show nothing (redirect handled in useEffect)
  return null;
}
