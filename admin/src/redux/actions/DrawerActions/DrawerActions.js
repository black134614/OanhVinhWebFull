import { CLOSE_DRAWER, GET_CHANGE_PASSWORD_FORM, GET_POST_CATEGORY_FORM, GET_POST_FORM, GET_PRODUCT_FORM, OPEN_DRAWER, SET_SUBMIT_POST_CATEGORY_FORM } from "../../constants/DrawerContants/DrawerContants";

export const openDrawer = () => ({
  type: OPEN_DRAWER
})
export const closeDrawer = () => ({
  type: CLOSE_DRAWER
})

export const getProductFormAction = (title, Component) => ({
  type: GET_PRODUCT_FORM,
  title,
  Component
})

export const getPostCategoryFormAction = (title, Component) => ({
  type: GET_POST_CATEGORY_FORM,
  title,
  Component
})

export const setSubmitPostCategoryFormAction = (submitFunction) => ({
  type: SET_SUBMIT_POST_CATEGORY_FORM,
  submitFunction
})

export const getPostFormAction = (title, Component) => ({
  type: GET_POST_FORM,
  title,
  Component
})

export const getChangePasswordFormAction = (title, Component) => ({
  type: GET_CHANGE_PASSWORD_FORM,
  title,
  Component
})
