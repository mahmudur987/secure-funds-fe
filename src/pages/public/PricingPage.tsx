import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      features: [
        "Free account & wallet creation",
        "Send money to other users",
        "Cash-in via agents",
        "Transaction history tracking",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Standard",
      price: "৳20 / month",
      features: [
        "All Basic features",
        "Lower send money fees",
        "Priority transaction processing",
        "Email & SMS alerts",
      ],
      cta: "Upgrade",
      highlight: true,
    },
    {
      title: "Agent",
      price: "Commission Based",
      features: [
        "Perform cash-in / cash-out",
        "Earn commission on every transaction",
        "Agent dashboard & history",
        "Admin approval required",
      ],
      cta: "Apply as Agent",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          No hidden charges. Pay only when you transact.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`rounded-2xl shadow-lg hover:shadow-xl transition ${
              plan.highlight ? "border-2 border-blue-600" : ""
            }`}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.title}</CardTitle>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Notes */}
      <div className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm px-6">
        <p>
          💡 Transaction fees apply on certain operations (e.g., send money,
          withdraw).
        </p>
        <p>💡 Agent commissions are automatically credited per transaction.</p>
      </div>
    </section>
  );
}
