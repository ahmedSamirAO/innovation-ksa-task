/* eslint-disable import/first */
import async from "../components/Async";

const Login = async(() => import("../pages/Login"));
const Posts = async(() => import("../pages/Posts"));
const Post = async(() => import("../pages/Post"));
const User = async(() => import("../pages/User"));

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

const userRoute = {
  name: "User",
  path: "/user/:id",
  component: User,
};

export const homeRoutes = [postsRoute, postRoute, userRoute];

export const authRoutes = [loginRoute];
