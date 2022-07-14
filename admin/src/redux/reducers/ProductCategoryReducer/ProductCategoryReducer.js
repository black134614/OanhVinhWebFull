import { GET_ALL_PRODUCT_CATEGORY, GET_EDIT_PRODUCT_CATEGORY_FORM, SET_EDIT_PRODUCT_CATEGORY_FORM } from "../../constants/ProductCategoryConstants/ProductCategoryConstants"

const initialState = {
    ProductCategoryList: [{
        postCategoryID: 0,
        tittle: "",
        description: "",
        status: true,
        createBy: "Null",
        createTime: null
      }],
    EditProductCategory: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCT_CATEGORY: {
            state.ProductCategoryList = action.ProductCategoryList.map((item, index) => {
                return {
                    key: index + '',
                    productCategoryID: item.productCategoryID,
                    tittle: item.tittle,
                    description: item.description,
                    positon: item.positon,
                    status: item.status,
                    isDelete: item.isDelete,
                    createBy: item.createBy,
                    createTime: item.createTime
                };
            })
            return { ...state }
        }
        case SET_EDIT_PRODUCT_CATEGORY_FORM: {
            const  productCategory  = action;
            return {...state, EditProductCategory: productCategory}
        }
        default:
            return state
    }
}
