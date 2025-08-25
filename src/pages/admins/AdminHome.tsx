import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, UserCheck, Receipt, DollarSign } from "lucide-react";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { useGetAllTransactionQuery } from "@/redux/features/transaction/transaction.api";
import {
  getDailyTransactionCounts,
  getTotalAmount,
} from "@/utils/transactions";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorState from "@/components/common/ErrorComponent";

export default function AdminHome() {
  const {
    data: users,
    isSuccess: isUsersSuccess,
    isLoading,
    isError,
    error,
  } = useGetAllUserQuery({});
  const userCount = users?.data.filter((user) => user.role === "USER").length;
  const agentCount = users?.data.filter((user) => user.role === "AGENT").length;
  const {
    data: transactions,
    isSuccess: isTransactionsSuccess,
    isLoading: isTransactionLoading,
    isError: isTransactionError,
  } = useGetAllTransactionQuery({
    limit: 100000000000000000000000000000000000,
    fields: "amount",
  });
  const totalAmount = getTotalAmount(transactions?.data || []);
  const data = getDailyTransactionCounts(transactions?.data || []);

  if (isLoading || isTransactionLoading) return <LoadingSpinner />;
  if (isError || isTransactionError) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : "An unknown error occurred";
    return (
      <ErrorState title="Error" message={errorMessage || "An error occurred"} />
    );
  }

  return (
    <div className="space-y-6 p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Users</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          {isUsersSuccess && (
            <CardContent>
              <p className="text-2xl font-bold">{userCount ?? 0} </p>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Agents</CardTitle>
            <UserCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{agentCount ?? 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Transactions</CardTitle>
            <Receipt className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          {isTransactionsSuccess && (
            <CardContent>
              <p className="text-2xl font-bold">
                {" "}
                {transactions?.data.length}{" "}
              </p>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Volume</CardTitle>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">৳{totalAmount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="transactions"
                fill="#2563eb"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
