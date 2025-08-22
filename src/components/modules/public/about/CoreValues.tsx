import { Card, CardContent } from "@/components/ui/card";

const CoreValues = () => {
  const values = [
    {
      icon: "🔐",
      title: "Security First",
      description:
        "Your funds and data are always protected with enterprise-grade encryption.",
    },
    {
      icon: "⚡",
      title: "Speed",
      description:
        "Instant transfers with reliable uptime, whenever you need it.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Transparent fees, no hidden charges — ever.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "For users, agents, and admins of all levels.",
    },
  ];
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val, idx) => (
          <Card key={idx} className="shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">{val.icon}</div>
              <h3 className="text-lg font-semibold">{val.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {val.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
