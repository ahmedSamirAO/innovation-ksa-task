import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Typography as MuiTypography } from "@material-ui/core";
import styled from "styled-components/macro";
import { getComments } from "../../redux/actions";
import Comment from "./Comment";
import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const CommentsContainer = styled.div`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  max-height: 450px;
  overflow-y: auto;
  padding: 20px;
`;

const ViewMore = styled(Typography)`
  font-size: 16px;
  margin-top: 40px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
`;

const Comments = ({ postId }) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [viewedComments, setViewedComments] = useState([]);

  const comments = useSelector(({ posts }) => posts.comments);

  const PER_PAGE = 10;

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    const filteredComments = comments.slice(
      page * PER_PAGE,
      (page + 1) * PER_PAGE
    );

    if (page === 0) {
      setViewedComments(filteredComments);
    } else {
      setViewedComments((viewedComments) => [
        ...viewedComments,
        ...filteredComments,
      ]);
    }
  }, [comments, page]);

  return (
    <CommentsContainer>
      <Helmet title="Comments" />

      <Typography variant="h3" mb={5}>
        Comments:
      </Typography>

      {viewedComments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {comments?.length > 10 && comments.length > viewedComments.length && (
        <ViewMore onClick={() => setPage(page + 1)}>View More</ViewMore>
      )}
    </CommentsContainer>
  );
};

export default Comments;
