import { all } from "redux-saga/effects";
import * as SignInSaga from '../saga/SignInSaga/SignInSaga'
export function* rootSaga() {
    yield all([
        //nghiep vu login
        SignInSaga.theoDoiSigninSaga(),

    ])
}