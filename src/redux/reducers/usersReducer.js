import { UsersActions } from "../actions/types";

const initialState = {
  currentUser: {},
  users: [],
  selectedUser: {},
  selectedUserPosts: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case UsersActions.SAVE_USER: {
      return {
        ...state,
        currentUser: actions.payload,
      };
    }

    case UsersActions.SAVE_USERS: {
      return {
        ...state,
        users: actions.payload,
      };
    }

    default:
      return state;
  }
}
