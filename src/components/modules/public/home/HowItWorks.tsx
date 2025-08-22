import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Wallet, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-blue-600" />,
      title: "Register Account",
      description:
        "Create your free Secure-Fund account as a User or Agent in minutes.",
    },
    {
      icon: <Wallet className="h-12 w-12 text-green-600" />,
      title: "Add or Cash-In",
      description:
        "Deposit funds from your bank or cash-in via an authorized agent.",
    },
    {
      icon: <Send className="h-12 w-12 text-purple-600" />,
      title: "Send & Manage Money",
      description:
        "Start sending money, withdrawing, and tracking transactions securely.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Get started with Secure-Fund in 3 easy steps.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-2xl hover:shadow-xl transition"
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              {step.icon}
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
