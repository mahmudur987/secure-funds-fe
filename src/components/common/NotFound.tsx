import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NotFound() {
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
        className="text-7xl font-extrabold text-gray-800"
      >
        404
      </motion.h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md text-center">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-3">
        <Button onClick={() => navigate("/")}>🏠 Go Home</Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          🔙 Go Back
        </Button>
      </div>
    </motion.div>
  );
}
