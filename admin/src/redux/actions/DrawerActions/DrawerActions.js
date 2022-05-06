import { CLOSE_DRAWER, OPEN_DRAWER } from "../../constants/DrawerContants/DrawerContants";

export const openDrawer = () => ({
  type: OPEN_DRAWER
})
export const closeDrawer = () => ({
  type: CLOSE_DRAWER
})
