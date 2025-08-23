import { AppSidebar } from "@/components/common/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";
import { Navigate, Outlet } from "react-router";
export default function DashboardLayout() {
  const { data, isLoading } = useGetProfileQuery();
  const user = data?.data as User;
  if (isLoading) return null;
  if (!user) return <Navigate to="/" replace />;

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
