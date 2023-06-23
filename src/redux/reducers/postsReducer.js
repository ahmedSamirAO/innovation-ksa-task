import { PostsActions } from "../actions/types";

const initialState = {
  posts: [],
  selectedPost: {},
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case PostsActions.SAVE_POSTS:
      return {
        ...state,
        posts: actions.payload,
      };

    case PostsActions.SAVE_POST:
      return {
        ...state,
        selectedPost: actions.payload,
      };

    default:
      return state;
  }
}
