import React from "react";
import styled from "styled-components/macro";
import {
  Grid as MuiGrid,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);
const Grid = styled(MuiGrid)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border-radius: 4px;
`;

function UserInformation({ user }) {
  return (
    <HeadingGrid
      alignItems="center"
      container
      spacing={0}
      mb={5}
      pl={10}
      pr={4}
      py={6}
    >
      <Grid item xs={12} mb={5}>
        <Typography variant="h3" display="inline" pr={2}>
          User Information:
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mb={2}>
        <Typography variant="h4" display="inline" pr={2}>
          name:{" "}
        </Typography>
        <Typography display="inline">{user?.name}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mb={2}>
        <Typography variant="h4" display="inline" pr={2}>
          User Name:{" "}
        </Typography>{" "}
        <Typography display="inline">{user?.username}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mb={2}>
        <Typography variant="h4" display="inline" pr={2}>
          email:
        </Typography>
        <Typography display="inline">{user?.email}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mb={2}>
        <Typography variant="h4" display="inline" pr={2}>
          phone:
        </Typography>
        <Typography display="inline">{user?.phone}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mb={2}>
        <Typography variant="h4" display="inline" pr={2}>
          Company Name:
        </Typography>
        <Typography display="inline">{user?.company?.name}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" display="inline" pr={2}>
          Address:
        </Typography>
        <Typography display="inline">
          {user?.address?.city}, {user?.address?.street}, {user?.address?.suite}
        </Typography>
      </Grid>
    </HeadingGrid>
  );
}

export default UserInformation;
