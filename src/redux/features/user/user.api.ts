import baseApi from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    CreateUser: build.mutation({
      query: (credentials) => ({
        url: "/users",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
