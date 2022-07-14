import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { postCategoryServices } from '../../../services/PostCategoryService';
import { notifiFunction } from '../../../util/Notification/Notification'
import { closeDrawer } from '../../actions/DrawerActions/DrawerActions';
import { displayLoading, hideLoading } from '../../actions/LoadingActions';
import { getAllPostCategoryAction, getAllPostCategoryAPIAction } from '../../actions/PostCategoryActions/PostCategoryActions';
import { ADD_POST_CATEGORY_SAGA, DELETE_POST_CATEGORY_SAGA, GET_ALL_POST_CATEGORY_SAGA, UPDATE_POST_CATEGORY_SAGA } from '../../constants/PostCategoryConstants/PostCategoryConstants';
// saga them danh muc bai dang / add post category
function* addPostCategorySaga(action) {
    const {PostCategory } = action;
    try {
        const { data, status } = yield call(() => postCategoryServices.addPostCategory(PostCategory))
        if (data) {
            yield put(closeDrawer());
            notifiFunction('success', 'Thêm mới danh mục bài đăng ' + PostCategory.tittle + ' thành công!')
            yield put(getAllPostCategoryAPIAction());
        }
        else{
            notifiFunction('error', 'Thêm mới danh mục bài đăng thất bại!');
        }
       
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiAddPostCategorySaga() {
    yield takeLatest(ADD_POST_CATEGORY_SAGA, addPostCategorySaga)
}

//saga lay tat ca danh muc bai dang / get all post category
function* getAllPostCategory() {
    yield put(displayLoading());
    try {
        const { data, status } = yield call(() => postCategoryServices.getAllPostCategory())
        if (data) {
            yield put(getAllPostCategoryAction(data));
        }
        else{
            notifiFunction("error", "Lỗi load dữ liệu!")
        }
        yield delay(500);
        yield put(hideLoading());
    } catch (error) {
        console.log(error.response.data)
    }
}
export function* theoDoiGetAllPostCategorySaga() {
    yield takeLatest(GET_ALL_POST_CATEGORY_SAGA, getAllPostCategory);
}
//saga xoa danh muc bai dang / delete post category
function* deletePostCategorySaga(action) {
    const { PostCategory } = action;
    try {
        const { data, status } = yield call(() => postCategoryServices.deletePostCategory(PostCategory));
        if (data) {
            notifiFunction('success', 'Đã xóa thành công danh mục bài đăng! ');
            yield put(getAllPostCategoryAPIAction());
        }
        else{
            notifiFunction('error', 'Xóa thất bại danh mục bài đăng! ');
        }
    } catch (error) {
        console.log(error)
    }
}
export function* theoDoiDeletePostCategorySaga() {
    yield takeLatest(DELETE_POST_CATEGORY_SAGA, deletePostCategorySaga)
}

//saga update post category/ cap nhap danh muc bai dang
function* updatePostCategorySaga(action) {
    const { PostCategory } = action;
    console.log(PostCategory);
    try {
        const { data, status } = yield call(() => postCategoryServices.updatePostCategory(PostCategory));
        if (data) {
            yield put(closeDrawer());
            notifiFunction('success', 'Đã sửa thành công danh mục bài đăng! ');
            yield put(getAllPostCategoryAPIAction());
        }
        else{
            notifiFunction('error', 'Sửa danh mục bài đăng thất bại! ');
        }
    } catch (error) {
        console.log(error)
    }
}
export function* theoDoiUpdatePostCategorySaga() {
    yield takeLatest(UPDATE_POST_CATEGORY_SAGA, updatePostCategorySaga)
}