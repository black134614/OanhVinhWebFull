import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";

export const displayLoading = () => ({
  type: DISPLAY_LOADING
})

export const hideLoading = () => ({
  type: HIDE_LOADING
})

