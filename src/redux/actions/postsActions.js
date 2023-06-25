import { axiosService as API } from "../../services/axiosInterceptors";
import { PostsActions } from "./types";

export const getPosts = () => {
  return async (dispatch) => {
    return API.get("/posts").then((response) => {
      dispatch(savePosts(response.data));
    });
  };
};

export const getPostById = (postId) => {
  return async (dispatch) => {
    return API.get(`/posts?id=${postId}`).then((response) => {
      if (response.data.length > 0) {
        dispatch(saveSelectedPost(response.data[0]));
        return response;
      }
    });
  };
};

export const createPost = (values) => {
  return async (dispatch) => {
    return API.post("/posts", values)
      .then((response) => {
        dispatch(savePost(response.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
};

export const getComments = (postId) => {
  return async (dispatch) => {
    return API.get(`/posts/${postId}/comments`).then((response) => {
      dispatch(saveComments(response.data));
    });
  };
};

export const createComment = (values) => {
  return async (dispatch) => {
    return API.post("/comments", values)
      .then((response) => {
        dispatch(saveComment(response.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
};

export const savePosts = (posts) => ({
  type: PostsActions.SAVE_POSTS,
  payload: posts,
});

export const savePost = (post) => ({
  type: PostsActions.SAVE_POST,
  payload: post,
});

export const saveSelectedPost = (post) => ({
  type: PostsActions.SAVE_SELECTED_POST,
  payload: post,
});

export const saveComments = (comments) => ({
  type: PostsActions.SAVE_COMMENTS,
  payload: comments,
});

export const saveComment = (comment) => ({
  type: PostsActions.SAVE_COMMENT,
  payload: comment,
});
