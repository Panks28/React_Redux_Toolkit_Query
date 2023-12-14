import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  tagTypes:['products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/getAll",
      providesTags:['products']
    }),

    addProduct: builder.mutation({
      query: (product) => ({
        url: "/signup",
        method: "POST",
        body: product,
      }),
    }),

    getOneProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    updateProduct: builder.mutation({
      query: (updatedProductDetails) => ({
        url: `update/${updatedProductDetails.id}`,
        method: "PATCH",
        body: updatedProductDetails,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags:['products']
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useGetOneProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
