import { Card } from "@/components/ui/card";

import {
  Send,
  Phone,
  Wallet,
  ShoppingCart,
  PlusCircle,
  Receipt,
  PiggyBank,
  Landmark,
  ShieldCheck,
  Banknote,
  BookOpen,
  Building2,
  Car,
  HandCoins,
  Globe,
  HeartHandshake,
} from "lucide-react";
import { SendMoneyModal } from "@/components/modal/SendMoneyModal";
import { useState } from "react";
import { CashOutModal } from "@/components/modal/CashOutModal";
import { toast } from "sonner";
import { CashInModal } from "@/components/modal/CashInModal";

const actions = [
  { title: "Cash In", icon: Send, link: "/dashboard/user/cashIn" },
  { title: "Mobile Recharge", icon: Phone, link: "/dashboard/user/recharge" },
  {
    title: "Cash Transfer",
    icon: Wallet,
    link: "/dashboard/user/cashTransfer",
  },
  {
    title: "Make Payment",
    icon: ShoppingCart,
    link: "/dashboard/user/payment",
  },
  { title: "Add Money", icon: PlusCircle, link: "/dashboard/user/add-money" },
  { title: "Pay Bill", icon: Receipt, link: "/dashboard/user/bill" },
  { title: "Savings", icon: PiggyBank, link: "/dashboard/user/savings" },
  { title: "Loan", icon: Landmark, link: "/dashboard/user/loan" },
  { title: "Insurance", icon: ShieldCheck, link: "/dashboard/user/insurance" },
  { title: "Funds to Bank", icon: Banknote, link: "/dashboard/user/bank" },
  { title: "Education Fee", icon: BookOpen, link: "/dashboard/user/education" },
  { title: "Micro Finance", icon: Building2, link: "/dashboard/user/micro" },
  { title: "Toll", icon: Car, link: "/dashboard/user/toll" },
  { title: "Request Money", icon: HandCoins, link: "/dashboard/user/request" },
  { title: "Remittance", icon: Globe, link: "/dashboard/user/remittance" },
  { title: "Donation", icon: HeartHandshake, link: "/dashboard/user/donation" },
];

export default function AgentQuickActions() {
  const [openSendMoneyModal, setOpenSendMoneyModal] = useState(false);
  const [openCashInModal, setOpenCashInModal] = useState(false);

  const handleActionClick = (link: string) => {
    console.log(link);
    if (link === "/dashboard/user/send-money") {
      setOpenSendMoneyModal(true);
    }

    if (link === "/dashboard/user/cashIn") {
      setOpenCashInModal(true);
    } else {
      toast.error("Under Development");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {actions.map((action, idx) => (
          <div
            key={idx}
            onClick={() => handleActionClick(action.link)}
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow hover:bg-gray-100 transition"
          >
            <Card className="flex items-center justify-center p-4 rounded-full bg-indigo-50 shadow-md">
              <action.icon className="h-6 w-6 text-indigo-600" />
            </Card>
            <span className="text-sm font-medium mt-2 text-center">
              {action.title}
            </span>
          </div>
        ))}
      </div>

      <CashInModal
        openModal={openCashInModal}
        setOpenModal={setOpenCashInModal}
      />
    </>
  );
}
