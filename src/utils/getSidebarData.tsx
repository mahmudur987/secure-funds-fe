import { adminSidebarData } from "@/router/AdminRoute";
import { agentSidebarData } from "@/router/AgentRoute";
import { userSidebarData } from "@/router/UserRoute";

export const getSidebarData = (role: string) => {
  if (role === "admin") {
    return adminSidebarData;
  } else if (role === "agent") {
    return agentSidebarData;
  } else {
    return userSidebarData;
  }
};
