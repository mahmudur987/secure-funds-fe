import { AppSidebar } from "@/components/common/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";
import { Navigate, Outlet } from "react-router";
export default function DashboardLayout() {
  const { data, isLoading } = useGetProfileQuery();
  const token = localStorage.getItem("accessToken");
  const user = data?.data as User;

  if (isLoading) return <p>Loading...</p>;

  if (!token) return <Navigate to="/" replace />;
  if (!user) return <Navigate to="/" replace />;

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
