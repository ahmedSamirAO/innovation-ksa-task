import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import styled from "styled-components/macro";

import SearchBar from "./SearchBar";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { getPosts } from "../../redux/actions";

const ViewMore = styled(Typography)`
  font-size: 16px;
  margin-top: 40px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
`;

const PostsComponents = ({ userId }) => {
  const dispatch = useDispatch();

  const [listedPosts, setListedPosts] = useState([]);
  const [viewedPosts, setViewedPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [filteredUser, setFilteredUser] = useState(userId ? userId : "All");

  const posts = useSelector(({ posts }) => posts.posts);

  const PER_PAGE = 10;

  const changeSearchText = (event) => {
    setSearchText(event.target.value);
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
    let filteredPosts = posts;

    if (filteredUser !== "All") {
      filteredPosts = filteredPosts.filter(
        (post) => post.userId.toString() === filteredUser
      );
    }

    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.includes(searchText) || post.body.includes(searchText)
    );

    setListedPosts(filteredPosts);
  }, [posts, filteredUser, searchText]);

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
  }, [listedPosts, page, filteredUser]);

  return (
    <React.Fragment>
      <SearchBar searchText={searchText} changeSearchText={changeSearchText} />

      {!userId && <CreatePost />}

      {viewedPosts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {posts?.length > 10 && viewedPosts.length < listedPosts.length && (
        <>
          {viewedPosts.length} {listedPosts.length}
          <ViewMore onClick={() => setPage(page + 1)}>View More</ViewMore>
        </>
      )}
    </React.Fragment>
  );
};

export default PostsComponents;
