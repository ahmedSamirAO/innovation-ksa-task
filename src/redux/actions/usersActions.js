import { axiosService as API } from "../../services/axiosInterceptors";
import { setErrorMessage } from "./commonActions";
import { UsersActions } from "./types";

export const getUsers = () => {
  return async (dispatch) => {
    return API.get("/users").then((response) => {
      dispatch(saveUsers(response.data));
    });
  };
};

export const getUserById = (userId) => {
  return async (dispatch) => {
    return API.get(`/users?id=${userId}`).then((response) => {
      if (response.data.length > 0) {
        return response;
      }
    });
  };
};

export const loginUser = (userId) => {
  return async (dispatch) => {
    return dispatch(getUserById(userId)).then((response) => {
      if (response.data.length > 0) {
        dispatch(saveUser(response.data[0]));
        return response;
      } else {
        dispatch(
          setErrorMessage({
            message: "Invalid User Name",
          })
        );
        return null;
      }
    });
  };
};

export const saveUsers = (users) => ({
  type: UsersActions.SAVE_USERS,
  payload: users,
});

export const saveUser = (user) => ({
  type: UsersActions.SAVE_USER,
  payload: user,
});
