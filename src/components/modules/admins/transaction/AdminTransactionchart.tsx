import { useGetAllTransactionQuery } from "@/redux/features/transaction/transaction.api";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { type DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AdminCommissionByDate from "./AdminCommissionByDate";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorState from "@/components/common/ErrorComponent";

function AdminTransactionChart() {
  // filters

  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const { data, isLoading, isSuccess, isError } = useGetAllTransactionQuery({
    limit: 1000000000000000000000,

    startDate: dateRange?.from,
    endDate: dateRange?.to,
  });

  const transactions = data?.data || [];

  const commissionByType = transactions.reduce<Record<string, number>>(
    (acc, tx) => {
      if (!acc[tx.transactionType]) acc[tx.transactionType] = 0;
      acc[tx.transactionType] += tx.commissionAmount;
      return acc;
    },
    {}
  );

  const chartData = Object.entries(commissionByType).map(([type, value]) => ({
    transactionType: type,
    commissionAmount: value,
  }));

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorState />;
  }
  return (
    <section className="space-y-6 mx-3 bg-pink-100 p-3 rounded-2xl ">
      <Card>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Date Range */}
            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[250px] justify-start text-left font-normal"
                  >
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="p-0 bg-white w-[500px] "
                >
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    defaultMonth={dateRange?.from}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
      {isSuccess && (
        <Card>
          <CardHeader>
            <CardTitle>Commission Strategy (by Transaction Type)</CardTitle>
            <CardTitle>
              CasIn Commission - {commissionByType["CashIn"]}
            </CardTitle>
            <CardTitle>
              CashOut commission - {commissionByType["CashOut"]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="transactionType" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="commissionAmount"
                  stroke="#4ade80" // green
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardContent>
            <AdminCommissionByDate transactions={transactions} />
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default AdminTransactionChart;
