import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn’t load the data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-md">
        <AlertTriangle size={32} />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 max-w-md text-gray-500">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-2xl bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600 transition"
        >
          Try Again
        </button>
      )}
    </motion.div>
  );
}
