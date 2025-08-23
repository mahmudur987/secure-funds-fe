import { siteLogo } from "@/assets/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { getSidebarData } from "@/utils/getSidebarData";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import LoadingSpinner from "./LoadingSpinner";

// Menu items.

// console.log(items);

export function AppSidebar() {
  const { data, isLoading } = useGetProfileQuery();

  const navigate = useNavigate();
  const [logOut] = useLogoutMutation();
  const items = getSidebarData(data?.data.role as string);

  // console.log(items);

  const handleLogOut = async () => {
    console.log("logout");
    await logOut();

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/", { replace: true }); // 👈 redirect to home
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col justify-between space-y-2 h-full">
          <SidebarGroupLabel asChild>
            <div className="flex items-center gap-2 my-10">
              <img src={siteLogo} alt="site logo" className="h-10 w-10" />

              <h2 className="text-xl font-semibold">Secure Fund</h2>
            </div>
          </SidebarGroupLabel>

          {isLoading && <LoadingSpinner />}

          {!isLoading && (
            <>
              <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent className="flex flex-col gap-2 grow justify-end ">
                <SidebarMenu>
                  <SidebarMenuItem key="Log Out">
                    <SidebarMenuButton asChild>
                      <Button variant="outline" onClick={handleLogOut}>
                        Log Out
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
