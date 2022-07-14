import { GET_FORM_UPDATE_USER, GET_USER_INFO, GET_USER_INFO_SAGA, UPDATE_USER_SAGA } from "../../constants/UserConstants/UserConstants";

export const getFormUpdateUser = (title, Component) => ({
    type: GET_FORM_UPDATE_USER,
    title: title,
    Component: Component
})

export const getUserInfoSaga = (userName) => ({
    type: GET_USER_INFO_SAGA,
    userName
})

export const getUserInfo = (UserInfo) => ({
    type: GET_USER_INFO,
    UserInfo
})

export const updateUserAPI = (user) => ({
    type: UPDATE_USER_SAGA,
    user
})
