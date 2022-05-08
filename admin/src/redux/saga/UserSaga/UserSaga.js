import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_INFO, GET_USER_INFO_SAGA, UPDATE_USER_SAGA } from "../../constants/UserConstants/UserConstants";
import { userServices } from '../../../services/UserServices'
import { notifiFunction } from "../../../util/Notification/Notification";
import { getUserInfo, getUserInfoSaga } from "../../actions/UserActions/UserActions";
import { closeDrawer } from '../../actions/DrawerActions/DrawerActions';
//Nghiep vu load thong tin user // get all user in api
function* getUserSaga(action) {
    const { userName } = action;
    try {
        const { data, status } = yield call(() => userServices.getUserInfo(userName));
        if (data.length === 0) {
            notifiFunction('error', 'Vui lòng đăng nhập để sử dụng chức năng này!');
        }
        else {
            yield put(getUserInfo(data[0]));
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiGetUserSaga() {
    yield takeLatest(GET_USER_INFO_SAGA, getUserSaga)
}
//nghiep vu update user/ cap nhat thong tin user
function* updateUserSaga(action) {
    const { user } = action;
    try {
        const { data, status } = yield call(() => userServices.updateUser(user));
        console.log(data);
        if (data.success === false) {
            notifiFunction('error', 'Cập nhật người dùng thất bại!');
        }
        else {
            yield put(closeDrawer());
            yield put(getUserInfoSaga(user.userName));
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiUpdateUserSaga() {
    yield takeLatest(UPDATE_USER_SAGA, updateUserSaga)
}