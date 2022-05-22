import { call, put, takeLatest } from 'redux-saga/effects';
import { postService } from '../../../services/PostServices';
import { notifiFunction } from '../../../util/Notification/Notification';
import { closeDrawer } from '../../actions/DrawerActions/DrawerActions';
import { getAllPostAction, getAllPostAPIAction } from '../../actions/PostActions/PostActions';
import { getAllProductAPIAction } from '../../actions/ProductAction/ProductAction';
import { ADD_POST_SAGA, DELETE_POST_SAGA, GET_ALL_POST_SAGA, UPDATE_POST_SAGA } from '../../constants/PostConstants/PostConstants';
//saga get all post / lay tat ca bai viet
function* getAllPostSaga() {
    try {
        const { data, status } = yield call(() => postService.getAllPost());
        console.log(data);
        if (!data) {
            notifiFunction('error', 'Lỗi load dữ liệu bài viết!');
        }
        else {
            yield put(getAllPostAction(data));
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiGetAllPostSaga() {
    yield takeLatest(GET_ALL_POST_SAGA, getAllPostSaga)
}
//saga add product / them san pham
function* addPostSaga(action) {
    const { Post } = action;
    console.log(Post);
    try {
        const { data, status } = yield call(() => postService.addPost(Post));
        if (!data) {
            notifiFunction('error', 'Lỗi thêm bài đăng!');
        }
        else {
            yield put(closeDrawer());
            yield put(getAllPostAPIAction());
            notifiFunction('success', 'Thêm bài đăng thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiAddPostSaga() {
    yield takeLatest(ADD_POST_SAGA, addPostSaga)
}
//saga delete post / xoa bai đăng
function* deletePostSaga(action) {
    const { Post } = action;
    try {
        const { data, status } = yield call(() => postService.deletePost(Post));
        console.log(data)
        if (!data) {
            notifiFunction('error', 'Lỗi xóa bài đăng!');
        }
        else {
        yield put(getAllPostAPIAction());
        notifiFunction('warning', 'Xóa bài đăng thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiDeletePostSaga() {
    yield takeLatest(DELETE_POST_SAGA, deletePostSaga)
}
//saga update post / sua, cap nhat bai dang
function* updatePostSaga(action) {
    const { Post } = action;
    try {
        const { data, status } = yield call(() => postService.updatePost(Post));
        if (!data) {
            notifiFunction('error', 'Lỗi cập nhật bài đăng!');
        }
        else {
            yield put(getAllPostAPIAction());
            yield put(closeDrawer());
            notifiFunction('success', 'Cập nhật bài đăng thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiUpdatePostSaga() {
    yield takeLatest(UPDATE_POST_SAGA, updatePostSaga)
}