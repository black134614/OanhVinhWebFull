import {call, delay, put, takeLatest} from 'redux-saga/effects'
import { productService } from '../../../services/ProductService';
import { notifiFunction } from '../../../util/Notification/Notification';
import { closeDrawer } from '../../actions/DrawerActions/DrawerActions';
import { displayLoading, hideLoading } from '../../actions/LoadingActions';
import { getAllProductAction, getAllProductAPIAction } from '../../actions/ProductAction/ProductAction';
import { ADD_PRODUCT_SAGA, DELETE_PRODUCT_SAGA, GET_ALL_PRODUCT_SAGA, UPDATE_PRODUCT_SAGA } from '../../constants/ProductConstant/ProductConstant';

//saga get all product / lay tat ca san pham
function* getAllProductSaga(){
    yield put(displayLoading());
    try {
        const {data, status} = yield call(()=>productService.getAllProduct());
        if(!data){
            notifiFunction('error', 'Lỗi load dữ liệu!');
        }
        else{
            console.log(data);
            yield put(getAllProductAction(data));
            yield delay(500);
            yield put(hideLoading());
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiGetAllProductSaga(){
    yield takeLatest(GET_ALL_PRODUCT_SAGA, getAllProductSaga)
}
//saga add product / them san pham
function* addProductSaga(action){
    const {product} = action;
    try {
        const {data, status} = yield call(()=>productService.addProduct(product));
        console.log(data);
        if(!data){
            notifiFunction('error', 'Lỗi thêm sản phẩm!');
        }
        else{
            yield put(closeDrawer());
            yield put(getAllProductAPIAction());
            notifiFunction('success', 'Thêm sản phẩm thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiAddProductSaga(){
    yield takeLatest(ADD_PRODUCT_SAGA, addProductSaga)
}
//saga delete product / xoa san pham
function* deleteProductSaga(action){
    const {product} = action;
    try {
        const {data, status} = yield call(()=>productService.deleteProduct(product));
        console.log(data);
        if(!data){
            notifiFunction('error', 'Lỗi xóa sản phẩm!');
        }
        else{
            yield put(getAllProductAPIAction());
            notifiFunction('warning', 'Xóa sản phẩm thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiDeleteProductSaga(){
    yield takeLatest(DELETE_PRODUCT_SAGA, deleteProductSaga)
}
//saga update product / sua, cap nhat san pham
function* updateProductSaga(action){
    const {product} = action;
    try {
        const {data, status} = yield call(()=>productService.updateProduct(product));
        console.log('update',data);
        if(!data){
            notifiFunction('error', 'Lỗi cập nhật sản phẩm!');
        }
        else{
            yield put(getAllProductAPIAction());
            notifiFunction('success', 'Cập nhật sản phẩm thành công!');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* theoDoiUpdateProductSaga(){
    yield takeLatest(UPDATE_PRODUCT_SAGA, updateProductSaga)
}