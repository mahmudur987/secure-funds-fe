import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Wallet, Users, Send } from "lucide-react";

export default function FeaturesPreview() {
  const features = [
    {
      icon: <Send className="h-10 w-10 text-blue-600" />,
      title: "Send Money Instantly",
      description:
        "Transfer funds securely to friends and family within seconds.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-green-600" />,
      title: "Add & Withdraw Easily",
      description: "Deposit from bank or cash-in via agent, withdraw anytime.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Agent Services with Commission",
      description: "Agents can handle cash-in/cash-out and earn commissions.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-600" />,
      title: "Secure Transactions",
      description: "Encrypted, role-based protection to keep your money safe.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Why Choose Secure-Fund?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          All-in-one digital wallet with the features you need.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg rounded-2xl">
            <CardContent className="flex flex-col items-center text-center p-6">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
