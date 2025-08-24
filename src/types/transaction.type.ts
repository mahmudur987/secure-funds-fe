export interface ITransaction {
  _id: string;
  transactionType: string;
  amount: number;
  transactionFeeAmount: number;
  commissionAmount: number;
  finalAmount: number;
  fromUserId: { name: string; phone: string; role: string };
  toUserId: { name: string; phone: string; role: string };
  transactionStatus: string;
  description: string;
  createdAt: string;
}
