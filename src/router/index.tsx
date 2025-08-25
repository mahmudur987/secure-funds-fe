import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/public/AboutPage";
import ContactUsPage from "@/pages/public/ContactUsPage";
import FaqPage from "@/pages/public/FaqPage";
import FeaturesPage from "@/pages/public/FeaturesPage";
import PricingPage from "@/pages/public/PricingPage";
import getRoutes from "@/utils/getroutes";
import { createBrowserRouter } from "react-router";
import { userSidebarData } from "./UserRoute";
import { adminSidebarData } from "./AdminRoute";
import { agentSidebarData } from "./AgentRoute";
import PrivateRoute from "./privetRoute";
import { Role } from "@/constant";

import DashboardRedirect from "./DashboardRedirect";
import Unauthorized from "@/pages/UnaAthorized";
import NotFound from "@/components/common/NotFound";
import UnderMaintenance from "@/pages/UnderMaintenance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // user
      {
        index: true, // <-- default landing for /dashboard
        element: <DashboardRedirect />,
      },

      {
        path: "user",
        element: <PrivateRoute roles={[Role.user]} />,
        children: getRoutes(userSidebarData),
      },

      {
        path: "admin",
        element: <PrivateRoute roles={[Role.admin]} />,
        children: getRoutes(adminSidebarData),
      },
      {
        path: "agent",
        element: <PrivateRoute roles={[Role.agent]} />,
        children: getRoutes(agentSidebarData),
      },

      {
        path: "*",
        element: <UnderMaintenance />,
      },
    ],
  },

  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
