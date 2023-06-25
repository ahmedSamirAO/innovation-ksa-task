import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import commonReducer from "./commonReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  themeReducer,
  common: commonReducer,
  posts: postsReducer,
  users: usersReducer,
});
