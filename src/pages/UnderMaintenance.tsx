import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function UnderMaintenance() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-center"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6"
      >
        <span className="text-7xl">🚧</span>
      </motion.div>

      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-bold text-gray-800"
      >
        We’ll Be Back Soon
      </motion.h1>

      <p className="mt-4 max-w-lg text-gray-600">
        Sorry for the inconvenience. We’re performing some maintenance at the
        moment. We’ll be back online shortly!
      </p>

      <div className="mt-6 flex gap-3">
        <Button onClick={() => navigate("/")}>🏠 Go Home</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          🔄 Refresh
        </Button>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </motion.div>
  );
}
