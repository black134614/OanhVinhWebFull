import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { authServices } from '../../../services/AuthServices';
import { SIGN_IN_SAGA } from '../../constants/AuthConstants/AuthConstants';
import { TOKEN, USER_LOGIN, STATUS_CODE } from '../../../util/constants/settingSystem';
import { productCategoryServices } from '../../../services/ProductCategoryServices';
import { ADD_PRODUCT_CATEGORY_SAGA, DELETE_PRODUCT_CATEGORY_SAGA, GET_ALL_PRODUCT_CATEGORY_SAGA, UPDATE_PRODUCT_CATEGORY_SAGA } from '../../constants/ProductCategoryConstants/ProductCategoryConstants';
import { getAllProductCategoryAction, getAllProductCategorySagaAction } from '../../actions/ProductCategoryActions/ProductCategoryActions';
import { notifiFunction } from '../../../util/Notification/Notification'
import { closeDrawer } from '../../actions/DrawerActions/DrawerActions';
import { displayLoading, hideLoading } from '../../actions/LoadingActions';
//saga them danh muc san pham / add product category
function* addProductCategorySaga(action) {
    const { ProductCategory } = action;
    try {
        const { data, status } = yield call(() => productCategoryServices.addProductCategory(ProductCategory))
        if (data.success === true) {
            yield put(closeDrawer());
            notifiFunction('success', 'Thêm mới danh mục sản phẩm ' + ProductCategory.tittle + ' thành công!')
            yield put(getAllProductCategorySagaAction());
        }
        else{
            notifiFunction('error', 'Thêm mới danh mục sản phẩm thất bại!')
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiAddProductCategorySaga() {
    yield takeLatest(ADD_PRODUCT_CATEGORY_SAGA, addProductCategorySaga)
}

//saga lay tat ca danh muc san pham / get all product category
function* getAllProductCategorySaga() {
    yield put(displayLoading());
    try {
        const { data, status } = yield call(() => productCategoryServices.getAllProductCategory())
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getAllProductCategoryAction(data));
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
export function* theoDoiGetAllProductCategorySaga() {
    yield takeLatest(GET_ALL_PRODUCT_CATEGORY_SAGA, getAllProductCategorySaga);
}
//saga xoa danh muc san pham / delete product category
function* deleteProductCategorySaga(action) {
    const { productCategory } = action;
    try {
        const { data, status } = yield call(() => productCategoryServices.deleteProductCategory(productCategory));
        notifiFunction('success', 'Đã xóa thành công danh mục! ');
        yield put(getAllProductCategorySagaAction());
    } catch (error) {
        console.log(error)
    }
}
export function* theoDoiDeleteProductCategorySaga() {
    yield takeLatest(DELETE_PRODUCT_CATEGORY_SAGA, deleteProductCategorySaga)
}

//saga update product category/ cap nhap danh muc san pham
function* updateProductCategorySaga(action) {
    let { ProductCategory } = action;
    console.log(ProductCategory);
    try {
        const { data, status } = yield call(() => productCategoryServices.updateProductCategory(ProductCategory));
        if (status === STATUS_CODE.SUCCESS) {
            yield put(closeDrawer());
            notifiFunction('success', 'Đã sửa thành công danh mục! ');
            yield put(getAllProductCategorySagaAction());
        }
    } catch (error) {
        console.log(error)
    }
}
export function* theoDoiUpdateProductCategorySaga() {
    yield takeLatest(UPDATE_PRODUCT_CATEGORY_SAGA, updateProductCategorySaga)
}