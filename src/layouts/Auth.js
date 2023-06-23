import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { isWidthUp } from "@material-ui/core/withWidth";
import { spacing } from "@material-ui/system";
import { CssBaseline, Paper as MuiPaper, withWidth } from "@material-ui/core";
import AuthGuard from "../utils/AuthGuard";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
  }
  
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
`;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  &.MuiPaper-root {
    padding-top: 0px !important;
  }
`;

const Dashboard = ({ children, routes, width }) => {
  return (
    <AuthGuard>
      <Root>
        <CssBaseline />
        <GlobalStyle />

        <AppContent>
          <MainContent p={isWidthUp("lg", width) ? 12 : 5}>
            {children}
          </MainContent>
        </AppContent>
      </Root>
    </AuthGuard>
  );
};

export default withWidth()(Dashboard);
