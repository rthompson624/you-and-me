import { Post } from "../../models/post";
import { emptySplitApi } from "./emptySplitApi";

export const postsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    getPosts: builder.query<Post[], undefined>({
      query: () => `posts`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostQuery, useGetPostsQuery } = postsApi;
