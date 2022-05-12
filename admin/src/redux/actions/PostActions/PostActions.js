import { ADD_POST_SAGA, DELETE_POST_SAGA, GET_ALL_POST, GET_ALL_POST_SAGA, UPDATE_POST_SAGA } from "../../constants/PostConstants/PostConstants";

export const getAllPostAPIAction = () => ({
  type: GET_ALL_POST_SAGA
})
export const getAllPostAction = (PostList) => ({
  type: GET_ALL_POST,
  PostList
})
export const deletePostAPIAction = (Post) => ({
  type: DELETE_POST_SAGA,
  Post
})
export const addPostAPIAction = (Post) => ({
  type: ADD_POST_SAGA,
  Post
})
export const updatePostAPIAction = (Post) => ({
  type: UPDATE_POST_SAGA,
  Post
})

