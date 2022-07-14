import { call, takeLatest } from 'redux-saga/effects';
import { authServices } from '../../../services/AuthServices';
import { SIGN_IN_SAGA } from '../../constants/AuthConstants/AuthConstants';
import { TOKEN, USER_LOGIN, STATUS_CODE } from '../../../util/constants/settingSystem';
import { notifiFunction } from '../../../util/Notification/Notification';

//saga chuc nang đang nhap / login
export function* signinSaga(action) {
    const { userLogin } = action;
    try {
        const { data, status } = yield call(() => authServices.signin(userLogin));
        console.log(status);
        if (status === STATUS_CODE.SUCCESS) {
            localStorage.setItem(TOKEN, data.token);
            localStorage.setItem(USER_LOGIN, JSON.stringify(data.user));
            action.history.push('/dashboard');
        }
        else {
            notifiFunction('error', data.title)
        }
    } catch (error) {
        console.log(error.response.data)
        notifiFunction('error', 'Tài khoản hoặc mật khẩu sai!')
    }
}
export function* theoDoiSigninSaga() {
    yield takeLatest(SIGN_IN_SAGA, signinSaga);
}