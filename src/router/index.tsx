import App from "@/App";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/public/Aboutpage";
import ContactUsPage from "@/pages/public/ContactUsPage";
import FaqPage from "@/pages/public/FaqPage";
import FeaturesPage from "@/pages/public/FeaturesPage";
import PricingPage from "@/pages/public/Pricingpage";
import { createBrowserRouter } from "react-router";

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
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
