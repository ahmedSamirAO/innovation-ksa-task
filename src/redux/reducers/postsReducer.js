import { PostsActions } from "../actions/types";

const initialState = {
  posts: [],
  selectedPost: {},
  comments: [],
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
        posts: [actions.payload, ...state.posts],
      };

    case PostsActions.SAVE_SELECTED_POST:
      return {
        ...state,
        selectedPost: actions.payload,
      };

    case PostsActions.SAVE_COMMENTS:
      return {
        ...state,
        comments: actions.payload,
      };

    case PostsActions.SAVE_COMMENT:
      return {
        ...state,
        comments: [actions.payload, ...state.comments],
      };

    default:
      return state;
  }
}
