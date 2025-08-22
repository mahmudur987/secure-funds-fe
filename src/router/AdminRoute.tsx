import type { RouteItem } from "@/types/route.type";
import {
  Home,
  Wallet,
  Users,
  Settings,
  List,
  BarChart,
  UserCog,
} from "lucide-react";

/* ADMIN DASHBOARD MENU */
export const adminSidebarData: RouteItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/admin",
    icon: Home,
    element: "a",
  },
  {
    title: "Users",
    url: "/dashboard/admin/users",
    icon: Users,
    element: "a",
  },
  {
    title: "Agents",
    url: "/dashboard/admin/agents",
    icon: UserCog,
    element: "a",
  },
  {
    title: "Wallets",
    url: "/dashboard/admin/wallets",
    icon: Wallet,
    element: "a",
  },
  {
    title: "Transactions",
    url: "/dashboard/admin/transactions",
    icon: List,
    element: "a",
  },
  {
    title: "Reports",
    url: "/dashboard/admin/reports",
    icon: BarChart,
    element: "a",
  },
  {
    title: "Settings",
    url: "/dashboard/admin/settings",
    icon: Settings,
    element: "a",
  },
];
