import { useGetAllTransactionQuery } from "@/redux/features/transaction/transaction.api";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import type { IResponse } from "@/types";
import type { ITransaction } from "@/types/transaction.type";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorState from "@/components/common/ErrorComponent";

function TransactionTable() {
  const [meta, setMeta] = useState<IResponse<ITransaction[]>["meta"] | null>(
    null
  );
  // filters
  const [transactionType, setTransactionType] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllTransactionQuery({
      limit: 10,
      page: page,
      transactionType: transactionType,
      searchTerm: search,
      startDate: dateRange?.from,
      endDate: dateRange?.to,
    });

  console.log(data);

  useEffect(() => {
    setMeta(data?.meta as IResponse<ITransaction[]>["meta"]);
  }, [data, isLoading]);
  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : "An unknown error occurred";
    return <ErrorState title="Error" message={errorMessage} />;
  }
  return (
    <Card className="p-4 shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">User Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* Search */}
          <Input
            placeholder="Search by transaction id"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-48"
          />

          {/* Transaction Type */}
          <Select
            onValueChange={(val) =>
              setTransactionType(val === "all" ? "" : val)
            }
            value={transactionType}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Send-Money">Send Money</SelectItem>
              <SelectItem value="CashIn">Cash In</SelectItem>
              <SelectItem value="CashOut">Cash Out</SelectItem>
            </SelectContent>
          </Select>

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
              <PopoverContent align="start" className="p-0 bg-white w-[500px] ">
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

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Transaction Id</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Final Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>commission</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isSuccess &&
              data?.data.length > 0 &&
              data.data.map((tx, i) => (
                <TableRow key={tx._id}>
                  <TableCell>
                    {" "}
                    {i + 1} {tx.transactionType}
                  </TableCell>

                  <TableCell>{tx._id}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>{tx.finalAmount}</TableCell>
                  <TableCell>{tx.transactionStatus}</TableCell>
                  <TableCell>{tx.fromUserId?.name}</TableCell>
                  <TableCell>{tx.toUserId?.name}</TableCell>
                  <TableCell>
                    <span>{tx.description.slice(0, 10)}...</span>
                  </TableCell>
                  <TableCell>{tx.commissionAmount}</TableCell>

                  <TableCell>
                    {format(new Date(tx.createdAt), "PPpp")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {meta && (
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              <span className="px-2 text-sm">
                Page {meta.page} of {meta.totalPage}
              </span>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setPage((p) => Math.min(meta.totalPage, p + 1))
                  }
                  className={
                    page === meta.totalPage
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </CardContent>
    </Card>
  );
}

const TransactionAllPage = () => {
  return (
    <div>
      <TransactionTable />
    </div>
  );
};

export default TransactionAllPage;
