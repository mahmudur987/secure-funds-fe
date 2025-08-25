import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ITransaction } from "@/types/transaction.type";

const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTransaction: builder.query<IResponse<ITransaction[]>, unknown>({
      query: (params) => ({
        url: "/transaction/user-transaction",
        method: "GET",
        params,
      }),
    }),
    GetAllTransaction: builder.query<IResponse<ITransaction[]>, unknown>({
      query: (params) => ({
        url: "/transaction",
        method: "GET",
        params,
      }),
    }),

    SendMoney: builder.mutation<IResponse<ITransaction[]>, unknown>({
      query: (data) => ({
        url: "/transaction/send-money",
        method: "POST",
        data,
      }),
    }),

    CashOut: builder.mutation<IResponse<ITransaction[]>, unknown>({
      query: (data) => ({
        url: "/transaction/cashOut",
        method: "POST",
        data,
      }),
    }),

    CashIn: builder.mutation<IResponse<ITransaction[]>, unknown>({
      query: (data) => ({
        url: "/transaction/cashIn",
        method: "POST",
        data,
      }),
    }),
    AddMoney: builder.mutation<IResponse<ITransaction[]>, unknown>({
      query: (data) => ({
        url: "/transaction/add-money",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useGetTransactionQuery,
  useSendMoneyMutation,
  useCashOutMutation,
  useCashInMutation,
  useAddMoneyMutation,
  useGetAllTransactionQuery,
} = transactionApi;
