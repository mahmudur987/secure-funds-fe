import baseApi from "@/redux/baseApi";

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
