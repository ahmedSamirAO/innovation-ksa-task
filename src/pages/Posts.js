import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Typography } from "@material-ui/core";
import styled from "styled-components/macro";

import SearchBar from "../components/Posts/SearchBar";
import { getPosts } from "../redux/actions";
import Post from "../components/Posts/Post";

const ViewMore = styled(Typography)`
  font-size: 16px;
  margin-top: 40px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
`;

const Posts = () => {
  const dispatch = useDispatch();

  const [listedPosts, setListedPosts] = useState([]);
  const [viewedPosts, setViewedPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);

  const posts = useSelector(({ posts }) => posts.posts);

  const PER_PAGE = 10;

  const changeSearchText = (event) => {
    const value = event.target.value;

    setSearchText(value);
    setListedPosts(
      posts.filter(
        (post) => post.title.includes(value) || post.body.includes(value)
      )
    );
    setPage(0);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    setListedPosts(posts);
    setPage(0);
  }, [posts]);

  useEffect(() => {
    const filteredPosts = listedPosts.slice(
      page * PER_PAGE,
      (page + 1) * PER_PAGE
    );

    if (page === 0) {
      setViewedPosts(filteredPosts);
    } else {
      setViewedPosts((viewedPosts) => [...viewedPosts, ...filteredPosts]);
    }
  }, [listedPosts, page]);

  return (
    <React.Fragment>
      <Helmet title="Gateway" />

      <SearchBar searchText={searchText} changeSearchText={changeSearchText} />

      {viewedPosts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {posts?.length > 10 && viewedPosts.length < listedPosts.length && (
        <ViewMore onClick={() => setPage(page + 1)}>View More</ViewMore>
      )}
    </React.Fragment>
  );
};

export default Posts;
