import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is my money secure with Secure-Fund?",
      answer:
        "Yes, all transactions are encrypted, and accounts are protected with role-based access.",
    },
    {
      question: "How do I add money to my wallet?",
      answer:
        "You can add funds via bank transfer or cash-in through an authorized agent.",
    },
    {
      question: "Can I send money to anyone?",
      answer:
        "Yes, you can transfer funds instantly to any registered Secure-Fund user.",
    },
    {
      question: "How do agents earn commission?",
      answer:
        "Agents earn commission automatically on every cash-in and cash-out transaction they handle.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "You can reset your password through the 'Forgot Password' option on the login page.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Everything you need to know about Secure-Fund.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
