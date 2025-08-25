import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-extrabold text-red-600"
      >
        403
      </motion.h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Unauthorized Access
      </h2>

      <p className="mt-2 text-gray-500 max-w-md text-center">
        You don’t have permission to view this page. Please contact an
        administrator if you think this is a mistake.
      </p>

      <div className="mt-6 flex gap-3">
        <Button onClick={() => navigate("/")}>🏠 Go Home</Button>
        <Button variant="outline" onClick={() => navigate("/login")}>
          🔑 Login Again
        </Button>
      </div>
    </motion.div>
  );
}
