import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ILogImResponse } from "@/types/user.type";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      IResponse<ILogImResponse>,
      { phone: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    logout: build.mutation<IResponse<ILogImResponse>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
