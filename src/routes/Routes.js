import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { authRoutes, homeRoutes } from "./index";
import WebsiteLayout from "../layouts/default";
import AuthLayout from "../layouts/Auth";

const Routes = () => (
  <Router>
    <Switch>
      {homeRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact
          render={(props) => (
            <WebsiteLayout>
              <route.component {...props} />
            </WebsiteLayout>
          )}
        />
      ))}

      {authRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact
          render={(props) => (
            <AuthLayout>
              <route.component {...props} />
            </AuthLayout>
          )}
        />
      ))}

      <Redirect exact to="/gateway" />
    </Switch>
  </Router>
);

export default Routes;
