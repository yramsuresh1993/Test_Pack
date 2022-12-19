import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/postReducer";

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;