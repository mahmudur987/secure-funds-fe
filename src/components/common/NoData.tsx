import { motion } from "framer-motion";

export default function NoData({
  message = "No data found",
}: {
  message?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-6xl">📭</span>
      </motion.div>

      <h2 className="mt-4 text-xl font-semibold text-gray-700">{message}</h2>
      <p className="mt-2 text-gray-500">
        Try adjusting your filters or come back later.
      </p>
    </motion.div>
  );
}
