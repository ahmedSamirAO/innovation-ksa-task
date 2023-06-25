import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { getPostById, savePageTitle } from "../redux/actions";
import Post from "../components/Posts/Post";
import Comments from "../components/Post/Comments";
import CreateComment from "../components/Post/CreateComment";

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector(({ posts }) => posts.selectedPost);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(savePageTitle(post.title));
  }, [dispatch, post]);

  return (
    <React.Fragment>
      {post?.id && (
        <React.Fragment>
          <Helmet title={post.title} />
          <Post post={post} />

          <CreateComment />

          <Comments postId={post.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PostPage;
