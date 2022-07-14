import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { countListServices } from '../../../services/CountListServices';
import { notifiFunction } from '../../../util/Notification/Notification';
import { getCountList } from '../../actions/CountListActions/CountListActions';
import { displayLoading, hideLoading } from '../../actions/LoadingActions';
import { GET_COUNT_LIST_SAGA } from '../../constants/CountListConstants/CountListConstants';

function* getCountListSaga() {
    yield put(displayLoading());
    try {
        const { data, status } = yield call(() => countListServices.countList());
        if (!data) {
            notifiFunction('error', 'Lỗi load dữ liệu!');
        }
        else {
            yield put(getCountList(data));
        }
        yield delay(500);
        yield put(hideLoading());
    } catch (error) {
        console.log(error);
    }   
}

export function* theoDoiGetCountListSaga() {
    yield takeLatest(GET_COUNT_LIST_SAGA, getCountListSaga);
}