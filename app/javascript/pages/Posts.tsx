import React from "react";
import { useGetPostsQuery } from "../services/api/postsApi";

const Posts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery(undefined);

  if (error) {
    console.log(error);
    return <div>Oh no, there was an error retrieving the posts!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!posts) {
    return null;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.message} - {post.created_at}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
