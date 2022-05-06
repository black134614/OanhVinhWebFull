import React from 'react'
import { GET_FORM_UPDATE_USER } from '../../constants/UserConstants/UserConstants'
import { OPEN_DRAWER, CLOSE_DRAWER } from '../../constants/DrawerContants/DrawerContants'
import { GET_EDIT_PRODUCT_CATEGORY_FORM, GET_PRODUCT_CATEGORY_FORM, SET_SUBMIT_CREATE_PRODUCT_CATEGORY, SET_SUBMIT_EDIT_PRODUCT_CATEGORY } from '../../constants/ProductCategoryConstants/ProductCategoryConstants'
const initialState = {
    visible: false,
    title: '',
    ComponentContentDrawer: <p>default</p>,
    callBackSubmit: (propsValue) => { alert('click demo!') }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case OPEN_DRAWER:
            return { ...state, visible: true }
        case CLOSE_DRAWER:
            return { ...state, visible: false }
        case GET_PRODUCT_CATEGORY_FORM: {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state };
        }
        case SET_SUBMIT_CREATE_PRODUCT_CATEGORY: {
            return { ...state, callBackSubmit: action.submitFunction }
        }
        case SET_SUBMIT_EDIT_PRODUCT_CATEGORY: {
            return { ...state, callBackSubmit: action.submitFunction }
        }
        case GET_EDIT_PRODUCT_CATEGORY_FORM: {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state };
        }
        default:
            return state
    }
}