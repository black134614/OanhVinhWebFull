import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';

import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './saga/rootSaga';

import AuthReducer from './reducers/AuthReducer/AuthReducer';
import DrawerReducer from './reducers/DrawerReducer/DrawerReducer';
import ProductCategoryReducer from './reducers/ProductCategoryReducer/ProductCategoryReducer';
import UserReducer from './reducers/UserReducer/UserReducer';
import ProductReducer from './reducers/ProductReducer/ProductReducer';
import PostCategoryReducer from './reducers/PostCategoryReducer/PostCategoryReducer';
import PostReducer from './reducers/PostReducer/PostReducer';
import CountListReducer from './reducers/CountListReducer/CountListReducer';

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //khai bao reducer
    AuthReducer,
    DrawerReducer,
    ProductCategoryReducer,
    UserReducer,
    ProductReducer,
    PostCategoryReducer,
    PostReducer,
    CountListReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;
