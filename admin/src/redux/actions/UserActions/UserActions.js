import { GET_FORM_UPDATE_USER } from "../../constants/UserConstants/UserConstants";

export const getFormUpdateUser = (title, Component) => ({
    type: GET_FORM_UPDATE_USER,
    title: title,
    Component: Component
})
