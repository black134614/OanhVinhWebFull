import { GET_ALL_PRODUCT_CATEGORY, GET_EDIT_PRODUCT_CATEGORY_FORM, SET_EDIT_PRODUCT_CATEGORY_FORM } from "../../constants/ProductCategoryConstants/ProductCategoryConstants"

const initialState = {
    ProductCategory: [
        {
            key: "0",
            productCategoryID: 0,
            tittle: "string",
            description: "string",
            positon: 0,
            status: true,
            isDelete: null,
            createBy: "admin",
            createTime: "2022-05-05T19:03:34.623"
        }
    ],
    EditProductCategory: {

    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCT_CATEGORY: {
            state.ProductCategory = action.ProductCategoryList.map((item, index) => {
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
