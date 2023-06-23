/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const Login = async(() => import("../pages/Login"));
const Posts = async(() => import("../pages/Posts"));

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
const postsRoute = {
  name: "Posts",
  path: "/",
  component: Posts,
};

export const homeRoutes = [gatewayRoute, postsRoute];

export const authRoutes = [loginRoute];
