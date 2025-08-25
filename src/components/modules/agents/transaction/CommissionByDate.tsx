import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Transaction = {
  _id: string;
  transactionType: string;
  amount: number;
  commissionAmount: number;
  createdAt: string;
};

interface Props {
  transactions: Transaction[];
}

const CommissionByDate: React.FC<Props> = ({ transactions }) => {
  // Group commissions by date
  const commissionByDate = transactions.reduce<Record<string, number>>(
    (acc, tx) => {
      const date = new Date(tx.createdAt).toLocaleDateString("en-CA"); // YYYY-MM-DD
      if (!acc[date]) acc[date] = 0;
      acc[date] += tx.commissionAmount;
      return acc;
    },
    {}
  );

  // Convert object -> array and sort by date
  const chartData = Object.entries(commissionByDate)
    .map(([date, commission]) => ({ date, commission }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  console.log(transactions, "transactions");
  console.log(commissionByDate, "commissionByDate");
  console.log(chartData, "chartData");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commission Trend (Date wise)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="commission"
              stroke="#6366f1" // Indigo
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CommissionByDate;
