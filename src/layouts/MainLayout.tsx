import Footer from "@/components/common/Footer";

import Navbar from "@/components/common/Navbar";
import { useGetProfileQuery } from "@/redux/features/user/user.api";
import { Navigate, Outlet } from "react-router";

const MainLayout = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);
  const token = localStorage.getItem("accessToken");

  if (token && !isLoading && data?.data)
    return <Navigate to="/dashboard" replace />;
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Navbar />
      <section className="flex-1 ">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
