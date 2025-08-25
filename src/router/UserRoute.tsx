import ProfilePage from "@/pages/ProfilePage";

import UserHome from "@/pages/users/UserHome";

import UserTransaction from "@/pages/users/UserTransaction";

import type { RouteItem } from "@/types/route.type";
import { Home, Settings, List } from "lucide-react";

/* USER DASHBOARD MENU */

export const userSidebarData: RouteItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/user",
    icon: Home,
    element: <UserHome />,
  },
  // {
  //   title: "My Wallet",
  //   url: "/dashboard/user/wallet",
  //   icon: Wallet,
  //   element: <UserWallet />,
  // },
  // {
  //   title: "Send Money",
  //   url: "/dashboard/user/send-money",
  //   icon: Send,
  //   element: <UserSendMoney />,
  // },
  // {
  //   title: "Deposit (Add Money)",
  //   url: "/dashboard/user/add-money",
  //   icon: ArrowDown,
  //   element: <UserAddMoney />,
  // },
  // {
  //   title: "Withdraw",
  //   url: "/dashboard/user/withdraw",
  //   icon: ArrowUp,
  //   element: <UserWithdraw />,
  // },
  {
    title: "Transactions",
    url: "/dashboard/user/transactions",
    icon: List,
    element: <UserTransaction />,
  },
  {
    title: "Profile",
    url: "/dashboard/user/profile",
    icon: Settings,
    element: <ProfilePage />,
  },
];
