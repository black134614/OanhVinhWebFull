import { RESET_AVATAR_PARAM, SET_AVATAR_PARAM, SET_INPUT_IMAGE_VALUE } from "../../constants/FormImageConstants/FormImageConstants";

export const setAvatarParam = (avatarParam) => ({
  type: SET_AVATAR_PARAM,
  avatarParam
})

export const resetAvatarParam = () =>({
  type: RESET_AVATAR_PARAM
})

export const setInputImgValue = (inputImgValue) => ({
  type: SET_INPUT_IMAGE_VALUE,
  inputImgValue
})
