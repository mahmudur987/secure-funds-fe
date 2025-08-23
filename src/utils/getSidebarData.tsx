import { Role } from "@/constant";
import { adminSidebarData } from "@/router/AdminRoute";
import { agentSidebarData } from "@/router/AgentRoute";
import { userSidebarData } from "@/router/UserRoute";

export const getSidebarData = (role: string) => {
  if (role === Role.admin) {
    return adminSidebarData;
  } else if (role === Role.agent) {
    return agentSidebarData;
  } else if (role === Role.user) {
    return userSidebarData;
  }
};
