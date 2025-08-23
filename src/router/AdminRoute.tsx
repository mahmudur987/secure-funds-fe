import AdminHome from "@/pages/admins/AdminHome";
import AgentListPage from "@/pages/admins/AgentListPage";
import ReportsPage from "@/pages/admins/ReportsPage";
import TransactionAllPage from "@/pages/admins/TransactionAllPage";
import UserListPage from "@/pages/admins/UserListPage";
import ProfilePage from "@/pages/ProfilePage";
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
    element: <AdminHome />,
  },
  {
    title: "Users",
    url: "/dashboard/admin/users",
    icon: Users,
    element: <UserListPage />,
  },
  {
    title: "Agents",
    url: "/dashboard/admin/agents",
    icon: UserCog,
    element: <AgentListPage />,
  },

  {
    title: "Transactions",
    url: "/dashboard/admin/transactions",
    icon: List,
    element: <TransactionAllPage />,
  },
  {
    title: "Reports",
    url: "/dashboard/admin/reports",
    icon: BarChart,
    element: <ReportsPage />,
  },
  {
    title: "Settings",
    url: "/dashboard/admin/settings",
    icon: Settings,
    element: <ProfilePage />,
  },
];
