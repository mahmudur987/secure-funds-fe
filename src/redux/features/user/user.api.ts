import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type {
  CreateUserResponse,
  ILogImResponse,
  User,
} from "@/types/user.type";

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
    GetProfile: build.query<IResponse<User>, unknown>({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    UpdateUserProfile: build.mutation<IResponse<ILogImResponse>, Partial<User>>(
      {
        query: (data) => ({
          url: "/user/profile",
          method: "PATCH",
          data,
        }),
        invalidatesTags: ["User"],
      }
    ),

    GetAllUser: build.query<IResponse<User[]>, unknown>({
      query: (params) => ({
        url: "/user",
        method: "GET",
        params,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetProfileQuery,
  useGetAllUserQuery,
  useUpdateUserProfileMutation,
} = userApi;
