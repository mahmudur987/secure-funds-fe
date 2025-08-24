import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ITransaction } from "@/types/transaction.type";

type Props = {
  transactions: ITransaction[];
};

export default function RecentTransactions({ transactions }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-2 text-left">Type</th>
                <th className="px-3 py-2 text-left">Amount</th>
                <th className="px-3 py-2 text-left">From</th>
                <th className="px-3 py-2 text-left">To</th>
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map((tx) => (
                <tr key={tx._id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{tx.transactionType}</td>
                  <td className="px-3 py-2">৳ {tx.amount}</td>
                  <td className="px-3 py-2">{tx.fromUserId?.phone}</td>
                  <td className="px-3 py-2">{tx.toUserId?.phone}</td>
                  <td
                    className={`px-3 py-2 font-medium ${
                      tx.transactionStatus === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {tx.transactionStatus}
                  </td>
                  <td className="px-3 py-2">
                    {new Date(tx.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
