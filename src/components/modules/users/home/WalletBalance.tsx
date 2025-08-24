import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

type WalletBalanceProps = {
  balance: number;
};

export default function WalletBalance({ balance = 0 }: WalletBalanceProps) {
  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg container mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Wallet Balance</CardTitle>
        <Wallet className="h-6 w-6 opacity-80" />
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">৳ {balance.toLocaleString()}</p>
        <p className="text-sm opacity-80 mt-1">Available Balance</p>
      </CardContent>
    </Card>
  );
}
