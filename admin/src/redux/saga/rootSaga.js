import { all } from "redux-saga/effects";
import * as SignInSaga from '../saga/SignInSaga/SignInSaga'
import * as ProductCategorySaga from '../saga/ProductCategorySaga/ProductCategorySaga'
import * as UserSaga from '../saga/UserSaga/UserSaga'
export function* rootSaga() {
    yield all([
        //nghiep vu login
        SignInSaga.theoDoiSigninSaga(),

        //nghiep vu product category
        ProductCategorySaga.theoDoiAddProductCategorySaga(),
        ProductCategorySaga.theoDoiGetAllProductCategorySaga(),
        ProductCategorySaga.theoDoiDeleteProductCategorySaga(),
        ProductCategorySaga.theoDoiUpdateProductCategorySaga(),
        //nghiep vu user
        UserSaga.theoDoiGetUserSaga(),
        UserSaga.theoDoiUpdateUserSaga(),
    ])
}