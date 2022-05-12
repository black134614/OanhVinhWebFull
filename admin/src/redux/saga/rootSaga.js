import { all } from "redux-saga/effects";
import * as SignInSaga from './SignInSaga/SignInSaga'
import * as ProductCategorySaga from './ProductCategorySaga/ProductCategorySaga'
import * as UserSaga from './UserSaga/UserSaga'
import * as ProductSaga from './ProductSaga/ProductSaga'
import * as PostcategorySaga from './PostcategorySaga/PostcategorySaga'
import * as Post from './PostSaga/PostSaga'
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
        //nghiep vu product
        ProductSaga.theoDoiGetAllProductSaga(),
        ProductSaga.theoDoiAddProductSaga(),
        ProductSaga.theoDoiDeleteProductSaga(),
        //nghiep vu Postcategory
        PostcategorySaga.theoDoiGetAllPostCategorySaga(),
        PostcategorySaga.theoDoiAddPostCategorySaga(),
        PostcategorySaga.theoDoiDeletePostCategorySaga(),
        PostcategorySaga.theoDoiUpdatePostCategorySaga(),
        //nghiep vu post
        Post.theoDoiGetAllPostSaga(),
        Post.theoDoiDeletePostSaga(),
        Post.theoDoiAddPostSaga(),
        Post.theoDoiUpdatePostSaga(),
    ])
}