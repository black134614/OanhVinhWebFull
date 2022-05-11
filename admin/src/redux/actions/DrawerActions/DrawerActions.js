import { CLOSE_DRAWER, GET_PRODUCT_FORM, OPEN_DRAWER } from "../../constants/DrawerContants/DrawerContants";

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