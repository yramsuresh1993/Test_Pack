import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    UPDATE_POST_TITLE,
  } from "./postTypes";
  const initialState = {
    posts: [],
    isLoading: false,
    errorMessage: "",
  };
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, isLoading: true };
      case FETCH_POSTS_SUCCESS:
        return {
          isLoading: false,
          posts: action.payload,
          errorMessage: "",
        };
      case FETCH_POSTS_FAILURE:
        return {
          isLoading: false,
          posts: [],
          errorMessage: action.payload,
        };
      case UPDATE_POST_TITLE:
        return {
          ...state,
          posts: action.payload,
        };
      default:
        return state;
    }
  };
  export default postReducer;