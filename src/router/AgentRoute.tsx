import AgentCommission from "@/pages/agents/AgentCommission";
import AgentDashboard from "@/pages/agents/AgentDashboard";
import AgentTransaction from "@/pages/agents/AgentTransaction";
import ProfilePage from "@/pages/ProfilePage";
import type { RouteItem } from "@/types/route.type";
import { Home, Settings, List, DollarSign } from "lucide-react";

/* AGENT DASHBOARD MENU */
export const agentSidebarData: RouteItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/agent",
    icon: Home,
    element: <AgentDashboard />,
  },
  // {
  //   title: "Cash-In",
  //   url: "/dashboard/agent/cash-in",
  //   icon: ArrowDown,
  //   element: "a",
  // },
  // {
  //   title: "Cash-Out",
  //   url: "/dashboard/agent/cash-out",
  //   icon: ArrowUp,
  //   element: "a",
  // },
  {
    title: "Transactions",
    url: "/dashboard/agent/transactions",
    icon: List,
    element: <AgentTransaction />,
  },
  {
    title: "Commissions",
    url: "/dashboard/agent/commissions",
    icon: DollarSign,
    element: <AgentCommission />,
  },
  {
    title: "Profile",
    url: "/dashboard/agent/profile",
    icon: Settings,
    element: <ProfilePage />,
  },
];
