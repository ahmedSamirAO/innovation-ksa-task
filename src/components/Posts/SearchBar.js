import React from "react";
import styled from "styled-components/macro";
import { FormControl, Grid as MuiGrid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TextInput from "../TextInput";

const Grid = styled(MuiGrid)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border-radius: 4px;
`;

function PostsSearchBar({ searchText, changeSearchText }) {
  return (
    <HeadingGrid
      justify="space-between"
      alignItems="center"
      container
      spacing={0}
      mb={5}
      px={4}
      py={2}
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
    </HeadingGrid>
  );
}

export default PostsSearchBar;
