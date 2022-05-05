import { call, takeLatest, put } from 'redux-saga/effects';
import { authServices } from '../../../services/AuthServices';
import { SIGN_IN_SAGA } from '../../constants/AuthConstants/AuthConstants';
import { TOKEN, USER_LOGIN, STATUS_CODE } from '../../../util/constants/settingSystem';
import { push } from 'react-router-redux';


export function* signinSaga(action) {
    const { userLogin } = action;
    try {
        const { data, status } = yield call(() => authServices.signin(userLogin));
        if (status === STATUS_CODE.SUCCESS) {
            localStorage.setItem(TOKEN, data.token);
            localStorage.setItem(USER_LOGIN, JSON.stringify(data.user));
            action.history.push('/dashboard');
        }
    } catch (error) {
        console.log(error.response.data)
    }
}
export function* theoDoiSigninSaga() {
    yield takeLatest(SIGN_IN_SAGA, signinSaga);
}