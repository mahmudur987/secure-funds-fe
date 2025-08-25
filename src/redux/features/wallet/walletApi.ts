import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { Wallet } from "@/types/user.type";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdateWallet: builder.mutation<
      IResponse<Wallet>,
      { id: string; status: string }
    >({
      query: (data) => ({
        url: `/wallet/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useUpdateWalletMutation } = walletApi;
