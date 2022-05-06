import { call, takeLatest } from "redux-saga/effects";
import { GET_USER_INFO } from "../../constants/UserConstants/UserConstants";

function* getUserInfo(action){
    const {userName} = action;
    try {
        // const {data, status} = yield call
    } catch (error) {
        
    }
}
function* theoDoiGetUserInfo(){
    yield takeLatest(GET_USER_INFO, getUserInfo)
}