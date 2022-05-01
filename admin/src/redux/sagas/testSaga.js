import { call, delay, put, takeLatest } from "redux-saga/effects";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { notifiFunction } from "../../util/Notification/notificationCyberbugs";

function * createDemoSaga(action){
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createDemoSaga);
}