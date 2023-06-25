import React from "react";
import { Helmet } from "react-helmet-async";
import PostsComponents from "../components/Posts";

const Posts = () => {
  return (
    <React.Fragment>
      <Helmet title="Posts" />
      <PostsComponents />
    </React.Fragment>
  );
};

export default Posts;
