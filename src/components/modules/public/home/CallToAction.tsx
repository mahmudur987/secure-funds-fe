import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Join thousands of users already using Secure-Fund 🚀
        </h2>
        <p className="text-lg mb-8">
          Create your account today and start sending, receiving, and managing
          money securely.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            Login
          </Button>
        </div>
      </div>
    </section>
  );
}
