import { LoginModal } from "@/components/modal/LoginModal";
import { RegisterModal } from "@/components/modal/RegisterModal";

export default function CallToAction() {
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
          <LoginModal />
          <RegisterModal />
        </div>
      </div>
    </section>
  );
}
