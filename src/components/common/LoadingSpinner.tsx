// components/common/LoadingSpinner.tsx
import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
      <p className="mt-3 text-gray-600 font-medium">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
