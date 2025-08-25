type Transaction = {
  commissionAmount: number;
  createdAt: string;
  transactionType: string;
  amount: number;
};

export function getTotalCommission(transactions: Transaction[]): number {
  return transactions.reduce((sum, tx) => sum + (tx.commissionAmount || 0), 0);
}
export function getTotalAmount(transactions: Transaction[]): number {
  return transactions.reduce((sum, tx) => sum + (tx.amount || 0), 0);
}

export function getCommissionByType(
  transactions: Transaction[]
): Record<string, number> {
  return transactions.reduce((acc, tx) => {
    if (!acc[tx.transactionType]) acc[tx.transactionType] = 0;
    acc[tx.transactionType] += tx.commissionAmount;
    return acc;
  }, {} as Record<string, number>);
}

export function getCommissionByDate(
  transactions: Transaction[]
): Record<string, number> {
  return transactions.reduce((acc, tx) => {
    const date = new Date(tx.createdAt).toLocaleDateString("en-CA"); // YYYY-MM-DD
    if (!acc[date]) acc[date] = 0;
    acc[date] += tx.commissionAmount;
    return acc;
  }, {} as Record<string, number>);
}

export function getDailyTransactionCounts(transactions: Transaction[]) {
  // Group by date
  const grouped = transactions.reduce<Record<string, number>>((acc, tx) => {
    const date = new Date(tx.createdAt);
    const formatted = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    }); // e.g., "25 Jan"

    if (!acc[formatted]) acc[formatted] = 0;
    acc[formatted] += 1;

    return acc;
  }, {});

  // Convert object → array
  return Object.entries(grouped).map(([date, transactions]) => ({
    date,
    transactions,
  }));
}
