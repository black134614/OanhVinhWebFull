import { ADD_PRODUCT_CATEGORY_SAGA, DELETE_PRODUCT_CATEGORY_SAGA, GET_ALL_PRODUCT_CATEGORY, GET_ALL_PRODUCT_CATEGORY_SAGA, GET_EDIT_PRODUCT_CATEGORY_FORM, GET_PRODUCT_CATEGORY_FORM, SET_EDIT_PRODUCT_CATEGORY_FORM, UPDATE_PRODUCT_CATEGORY_SAGA } from "../../constants/ProductCategoryConstants/ProductCategoryConstants";

export const getProductCategoryFormAction = (title, Component) => ({
  type: GET_PRODUCT_CATEGORY_FORM,
  title,
  Component
})

export const getEditProductCategoryFormAction = (title, Component) => ({
  type: GET_EDIT_PRODUCT_CATEGORY_FORM,
  title,
  Component
})

export const setEditProductCategoryFormAction = (productCategory) => ({
  type: SET_EDIT_PRODUCT_CATEGORY_FORM,
  productCategory
})

export const addProductCategoryAPIAction = (ProductCategory) => ({
  type: ADD_PRODUCT_CATEGORY_SAGA,
  ProductCategory
})

export const getAllProductCategorySagaAction = () => ({
  type: GET_ALL_PRODUCT_CATEGORY_SAGA
})

export const getAllProductCategoryAction = (ProductCategoryList) => ({
  type: GET_ALL_PRODUCT_CATEGORY,
  ProductCategoryList
})

export const deleteProductCategorySagaAction = (productCategory) => ({
  type: DELETE_PRODUCT_CATEGORY_SAGA,
  productCategory
})


export const deleteAction = (productCategoryID) => ({
  type: DELETE_PRODUCT_CATEGORY_SAGA,
  productCategoryID
})

export const updateProductCategorySagaAction = (ProductCategory) => ({
  type: UPDATE_PRODUCT_CATEGORY_SAGA,
  ProductCategory
})