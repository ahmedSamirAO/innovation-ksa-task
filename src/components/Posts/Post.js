import React from "react";
import styled from "styled-components/macro";
import { Grid as MuiGrid, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Grid = styled(MuiGrid)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const AuthorName = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Body = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
`;

function Post({ post }) {
  const history = useHistory();

  const users = useSelector(({ users }) => users.users);

  const getUserName = () => {
    return users.find((user) => user.id === post.userId)?.name;
  };

  const openPostPage = () => {
    history.push(`/post/${post.id}`);
  };

  const openUserPage = () => {
    history.push(`/user/${post.userId}`);
  };

  return (
    <HeadingGrid
      justify="space-between"
      alignItems="center"
      container
      spacing={0}
      mb={10}
      px={4}
      py={2}
    >
      <Grid item xs={12}>
        <Title onClick={openPostPage}>{post.title}</Title>
        <AuthorName onClick={openUserPage}>By: {getUserName()}</AuthorName>
        <Body>{post.body}</Body>
      </Grid>
    </HeadingGrid>
  );
}

export default Post;
