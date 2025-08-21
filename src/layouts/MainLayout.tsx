import Footer from "@/components/common/Footer";
import { ModeToggle } from "@/components/common/mode-toggle";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Navbar />
      <section className="flex-1 bg-pink-200">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
