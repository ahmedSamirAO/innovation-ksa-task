import React from "react";
import styled from "styled-components/macro";
import { FormControl, Grid as MuiGrid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TextInput from "../TextInput";
import Select from "../Select";
import { useSelector } from "react-redux";

const Grid = styled(MuiGrid)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border-radius: 4px;
`;

function PostsSearchBar({
  searchText,
  changeSearchText,
  filteredUser,
  setFilteredUser,
  userId,
}) {
  const users = useSelector(({ users }) => users.users);
  return (
    <HeadingGrid
      justify="space-between"
      alignItems="center"
      container
      spacing={0}
      mb={5}
      px={4}
      pt={4}
      pb={6}
    >
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <TextInput
            type="text"
            name="postsSearch"
            label="Search"
            value={searchText}
            onChange={changeSearchText}
            variant="standard"
          />
        </FormControl>
      </Grid>

      {!userId && (
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <Select
              name="userSelect"
              label="Select User"
              value={filteredUser}
              onChange={(e) => setFilteredUser(e.target.value)}
              variant="standard"
              options={users.map((user) => ({
                text: user.name,
                value: user.id,
              }))}
            />
          </FormControl>
        </Grid>
      )}
    </HeadingGrid>
  );
}

export default PostsSearchBar;
