import { all } from "redux-saga/effects";
import * as SignInSaga from '../saga/SignInSaga/SignInSaga'
import * as ProductCategorySaga from '../saga/ProductCategorySaga/ProductCategorySaga'
export function* rootSaga() {
    yield all([
        //nghiep vu login
        SignInSaga.theoDoiSigninSaga(),

        //nghiep vu product category
        ProductCategorySaga.theoDoiAddProductCategorySaga(),
        ProductCategorySaga.theoDoiGetAllProductCategorySaga(),
        ProductCategorySaga.theoDoiDeleteProductCategorySaga(),
        ProductCategorySaga.theoDoiUpdateProductCategorySaga(),
    ])
}