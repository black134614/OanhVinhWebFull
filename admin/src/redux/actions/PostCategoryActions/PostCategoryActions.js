import { ADD_POST_CATEGORY_SAGA, DELETE_POST_CATEGORY_SAGA, GET_ALL_POST_CATEGORY, GET_ALL_POST_CATEGORY_SAGA, UPDATE_POST_CATEGORY_SAGA } from "../../constants/PostCategoryConstants/PostCategoryConstants";

export const getAllPostCategoryAPIAction = () => ({
    type: GET_ALL_POST_CATEGORY_SAGA
})

export const getAllPostCategoryAction = (PostCategoryList) => ({
  type: GET_ALL_POST_CATEGORY,
  PostCategoryList
})

export const addPostCategoryAPIAction = (PostCategory) => ({
  type: ADD_POST_CATEGORY_SAGA,
  PostCategory
})

export const deletePostCategoryAPIAction = (PostCategory) => ({
  type: DELETE_POST_CATEGORY_SAGA,
  PostCategory
})

export const updatePostCategoryAPIAction = (PostCategory) => ({
  type: UPDATE_POST_CATEGORY_SAGA,
  PostCategory
})
