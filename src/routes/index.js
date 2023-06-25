/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const Login = async(() => import("../pages/Login"));
const Posts = async(() => import("../pages/Posts"));
const Post = async(() => import("../pages/Post"));

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
const postRoute = {
  name: "Post",
  path: "/post/:id",
  component: Post,
};

export const homeRoutes = [gatewayRoute, postsRoute, postRoute];

export const authRoutes = [loginRoute];
