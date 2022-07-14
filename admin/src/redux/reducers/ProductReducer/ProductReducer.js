import { GET_ALL_PRODUCT } from "../../constants/ProductConstant/ProductConstant"

const initialState = {
    ProductCategorySearch: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCT: {
            state.ProductList = action.ProductList.map((item, index) => {
                return {
                    key: index + '',
                    productID: item.productID,
                    productName: item.productName,
                    productDescription: item.productDescription,
                    productDetail: item.productDetail,
                    productImages: item.productImages,
                    productALTSeo: item.productALTSeo,
                    status: item.status,
                    productCategoryID: item.productCategoryID + '',
                    productCategoryName: item.productCategoryName,
                    createBy: item.createBy
                }
            });
            let firstValue = 0;
            state.ProductCategorySearch = [];
            action.ProductList.map((item, index) => {
                if (item.productCategoryID === firstValue)
                    return;
                else {
                    firstValue = item.productCategoryID;
                    let newItem = {
                        text: item.productCategoryName,
                        value: item.productCategoryID + ''
                    }
                    return state.ProductCategorySearch.push(newItem);
                }
            });
            return { ...state }
        }

        default:
            return state
    }
}
