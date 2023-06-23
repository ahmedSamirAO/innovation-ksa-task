import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled, { withTheme } from "styled-components/macro";
import { useDispatch } from "react-redux";

import {
  Grid,
  AppBar as MuiAppBar,
  Toolbar,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import { spacing } from "@material-ui/system";
import { deleteCookie } from "../utils/cookiesHandler";
import { saveUser } from "../redux/actions";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.palette.header.background};
  color: ${(props) => props.theme.palette.header.color};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledTypography = styled(MuiTypography)(spacing);
const Typography = styled(StyledTypography)`
  color: #000;
  padding: 0 5px;
`;

const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
  websiteName: {
    verticalAlign: "middle",
    fontSize: "40px",
    fontWeight: "bold",

    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  pageTitle: {
    textTransform: "uppercase",
    verticalAlign: "middle",
    fontSize: "34px",
    fontWeight: "bold",

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  detailsContainer: {
    display: "flex",
    alignItems: "center",
  },
  userName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0f1923",
    cursor: "pointer",
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const pageInfo = useSelector(({ common }) => common.title);
  const user = useSelector(({ users }) => users.currentUser);

  const [pageTitle, setPageTitle] = useState("");

  const logout = () => {
    deleteCookie("userId");
    dispatch(saveUser({}));
    history.push("/login");
  };

  useEffect(() => {
    let pathPartArr = pathname.split("/");

    if (pageInfo?.title) {
      setPageTitle(
        `${pageInfo.title.substring(0, 20)}${
          pageInfo.title.length > 20 ? "..." : ""
        }`
      );
    } else if (pathPartArr.length === 1) {
      setPageTitle(pathPartArr[pathPartArr.length - 1]);
    } else if (pathPartArr.length >= 2) {
      setPageTitle(
        `${pathPartArr[pathPartArr.length - 2]} / ${
          pathPartArr[pathPartArr.length - 1]
        }`
      );
    }
  }, [pathname, pageInfo]);

  const openLoginPage = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography className={classes.pageTitle}>
                World Connection
              </Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.pageTitle}>
                {pageTitle.split("-").join(" ")}
              </Typography>
            </Grid>

            <Grid item>
              <div className={classes.detailsContainer}>
                {user?.id ? (
                  <Typography className={classes.userName} onClick={logout}>
                    {user.name}
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={openLoginPage}
                  >
                    Login
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(AppBarComponent);
