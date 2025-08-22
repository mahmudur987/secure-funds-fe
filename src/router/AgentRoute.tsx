import type { RouteItem } from "@/types/route.type";
import {
  Home,
  ArrowDown,
  ArrowUp,
  Settings,
  List,
  DollarSign,
} from "lucide-react";

/* AGENT DASHBOARD MENU */
export const agentSidebarData: RouteItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/agent",
    icon: Home,
    element: "a",
  },
  {
    title: "Cash-In",
    url: "/dashboard/agent/cash-in",
    icon: ArrowDown,
    element: "a",
  },
  {
    title: "Cash-Out",
    url: "/dashboard/agent/cash-out",
    icon: ArrowUp,
    element: "a",
  },
  {
    title: "Transactions",
    url: "/dashboard/agent/transactions",
    icon: List,
    element: "a",
  },
  {
    title: "Commissions",
    url: "/dashboard/agent/commissions",
    icon: DollarSign,
    element: "a",
  },
  {
    title: "Profile",
    url: "/dashboard/agent/profile",
    icon: Settings,
    element: "a",
  },
];
