/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const Login = async(() => import("../pages/Login"));

const gatewayRoute = {
  name: "gateway",
  path: "/gateway",
  component: Gateway,
};

const loginRoute = {
  name: "Login",
  path: "/login",
  component: Login,
};

export const homeRoutes = [gatewayRoute];

export const authRoutes = [loginRoute];
