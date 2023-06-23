import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import commonReducer from "./commonReducer";
import gatewayReducer from "./gatewayReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  themeReducer,
  common: commonReducer,
  gateways: gatewayReducer,
  posts: postsReducer,
  users: usersReducer,
});
