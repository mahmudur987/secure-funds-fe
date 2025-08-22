import ProfilePage from "@/pages/ProfilePage";
import UserAddMoney from "@/pages/users/UserAddMoney";
import UserHome from "@/pages/users/UserHome";
import UserSendMoney from "@/pages/users/UserSendMoney";
import UserTransaction from "@/pages/users/UserTransaction";
import UserWallet from "@/pages/users/UserWallet";
import UserWithdraw from "@/pages/users/UserWithdraw";
import type { RouteItem } from "@/types/route.type";
import {
  Home,
  Wallet,
  Send,
  ArrowDown,
  ArrowUp,
  Settings,
  List,
} from "lucide-react";

/* USER DASHBOARD MENU */

export const userSidebarData: RouteItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/user",
    icon: Home,
    element: <UserHome />,
  },
  {
    title: "My Wallet",
    url: "/dashboard/user/wallet",
    icon: Wallet,
    element: <UserWallet />,
  },
  {
    title: "Send Money",
    url: "/dashboard/user/send-money",
    icon: Send,
    element: <UserSendMoney />,
  },
  {
    title: "Deposit (Add Money)",
    url: "/dashboard/user/add-money",
    icon: ArrowDown,
    element: <UserAddMoney />,
  },
  {
    title: "Withdraw",
    url: "/dashboard/user/withdraw",
    icon: ArrowUp,
    element: <UserWithdraw />,
  },
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
