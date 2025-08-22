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
      {
        path: "user",
        element: <PrivateRoute roles={[Role.user]} />,
        children: [
          {
            index: true,
            element: "a",
          },

          ...getRoutes(userSidebarData),
        ],
      },
      { path: "admin", children: getRoutes(adminSidebarData) },
      { path: "agent", children: getRoutes(agentSidebarData) },
    ],
  },

  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
