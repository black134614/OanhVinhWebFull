import { all } from "redux-saga/effects";
import * as testSaga from "./testSaga";

export function* rootSaga(){
    yield all([
        //cacs nghiep vu o day
        testSaga.theoDoiCreateProjectSaga()
    ])
}