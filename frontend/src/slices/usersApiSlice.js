import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constant";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
      register: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}`,
          method: "POST",
          body: data,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: `${USERS_URL}/logout`,
          method: "POST",
        }),
      }),
      getUsers: builder.query({
        query: () => ({
          url: USERS_URL,
        }),
        providesTags: ["User"],
        keepUnusedDataFor: 5,
      }),
      deleteUser: builder.mutation({
        query: (userId) => ({
          url: `${USERS_URL}/${userId}`,
          method: "DELETE",
        }),
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
} = userApiSlice;
