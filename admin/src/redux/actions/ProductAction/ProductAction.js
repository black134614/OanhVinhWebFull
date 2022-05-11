import { ADD_PRODUCT_SAGA, DELETE_PRODUCT_SAGA, GET_ALL_PRODUCT, GET_ALL_PRODUCT_SAGA, UPDATE_PRODUCT_SAGA } from "../../constants/ProductConstant/ProductConstant";

export const getAllProductAPIAction = () => ({
  type: GET_ALL_PRODUCT_SAGA,
})
export const getAllProductAction = (ProductList) => ({
  type: GET_ALL_PRODUCT,
  ProductList
})

export const addProductAPI = (product) => ({
  type: ADD_PRODUCT_SAGA,
  product
})

export const deleteProductAPI = (product) => ({
  type: DELETE_PRODUCT_SAGA,
  product
})
export const updateProductAPI = (product) => ({
  type: UPDATE_PRODUCT_SAGA,
  product
})
