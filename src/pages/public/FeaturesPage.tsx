import VisualSection from "@/components/modules/public/features/VisualSection";
import CallToAction from "@/components/modules/public/home/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Wallet,
  Users,
  Send,
  BarChart,
  Smartphone,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Send className="h-12 w-12 text-blue-600" />,
      title: "Instant Send Money",
      description: "Transfer funds instantly to other users in seconds.",
    },
    {
      icon: <Wallet className="h-12 w-12 text-green-600" />,
      title: "Easy Add & Withdraw",
      description: "Add funds via bank or agent, withdraw anytime you need.",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Agent Services",
      description:
        "Agents can perform cash-in/out operations and earn commissions.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-red-600" />,
      title: "Security First",
      description: "Encrypted transactions with secure role-based access.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-indigo-600" />,
      title: "Transaction History",
      description: "View, filter, and track your transaction history anytime.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-600" />,
      title: "Responsive Design",
      description: "Manage your wallet securely on mobile, tablet, or desktop.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Features
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Everything you need in a modern digital wallet.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-2xl hover:shadow-xl transition"
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <VisualSection />
      <CallToAction />
    </section>
  );
}
