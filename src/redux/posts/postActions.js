import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_POST_TITLE,
} from "./postTypes";
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
export const fetchPostsFailure = (err) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err,
  };
};
export const updateTitle = (payload) => {
  return {
    type: UPDATE_POST_TITLE,
    payload,
  };
};
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err.message));
      });
  };
};