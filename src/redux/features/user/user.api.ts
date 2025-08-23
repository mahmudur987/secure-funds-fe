import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { CreateUserResponse, User } from "@/types/user.type";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    CreateUser: build.mutation<
      IResponse<CreateUserResponse>,
      {
        name: string;
        phone: string;
        role: "ADMIN" | "AGENT" | "USER";
        password: string;
      }
    >({
      query: (credentials) => ({
        url: "/user/create-user",
        method: "POST",
        data: credentials,
      }),
    }),
    GetProfile: build.query<IResponse<User>, void>({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetProfileQuery } = userApi;
