import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const CommentContainer = styled.div`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey.border};
  padding-bottom: 5px;
`;

const CommenterName = styled(Typography)`
  font-size: 12px;
  cursor: pointer;
`;

const CommentBody = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Comment = ({ comment }) => {
  const history = useHistory();

  const openUserPage = () => {
    history.push(`/user/${comment.userId}`);
  };

  return (
    <CommentContainer>
      <CommenterName onClick={openUserPage}>By: {comment.name}</CommenterName>
      <CommentBody>{comment.body}</CommentBody>
    </CommentContainer>
  );
};

export default Comment;
