import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience. It also reduces customer support workload and builds trust with users.",
  },
  {
    question: "What is Secure-Fund?",
    answer:
      "Secure-Fund is a digital wallet system that allows you to send, receive, and manage money securely. Inspired by popular wallets like bKash and Nagad, it is designed with role-based access for Users, Agents, and Admins.",
  },
  {
    question: "How do I create an account on Secure-Fund?",
    answer:
      "You can register directly on the platform by providing your name, email, phone number, and password. Once registered, your wallet will be automatically created with an initial balance.",
  },
  {
    question: "Is my money safe in Secure-Fund?",
    answer:
      "Yes, security is our top priority. We use JWT authentication, bcrypt password hashing, role-based access control, and transaction tracking to ensure your funds and data are safe at all times.",
  },
  {
    question: "How do I add money to my wallet?",
    answer:
      "You can add money through agents (cash-in) or via direct bank top-up (simulated in the system). The amount will reflect instantly in your wallet balance.",
  },
  {
    question: "What is the role of agents in Secure-Fund?",
    answer:
      "Agents help users perform cash-in and cash-out operations. In return, agents earn commissions on each transaction, which is automatically credited to their wallet.",
  },
  {
    question: "Are there any transaction fees?",
    answer:
      "Yes, certain operations like send money or withdraw may include small platform-defined transaction fees. Fees are deducted automatically during the transaction and recorded for transparency.",
  },
  {
    question: "How can I view my transaction history?",
    answer:
      "You can log in to your dashboard and go to the 'Transactions' section. There you can filter by type, date, or amount to easily track your financial activity.",
  },
  {
    question: "What happens if I forget my password?",
    answer:
      "You can reset your password using the 'Forgot Password' option on the login page. An email or SMS verification will be required to set a new password.",
  },
  {
    question: "Can an Admin block my account?",
    answer:
      "Yes, Admins have the ability to block or unblock users and agents in cases of fraud, suspicious activity, or violation of terms. Blocked users cannot perform any transactions until reactivated.",
  },
  {
    question: "Does Secure-Fund work on mobile devices?",
    answer:
      "Absolutely. Secure-Fund is fully responsive and optimized for desktops, tablets, and mobile devices. You can manage your wallet anywhere, anytime.",
  },
  {
    question: "Is there a commission history for agents?",
    answer:
      "Yes, agents can view their commission earnings in the 'Transactions' section of their dashboard, along with the details of each cash-in or cash-out transaction.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the 'Contact' page by submitting the inquiry form. Our support team will get back to you promptly via email or phone.",
  },
];

const FaqPage = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">{badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
