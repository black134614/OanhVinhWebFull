import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';

import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './saga/rootSaga';

import AuthReducer from './reducers/AuthReducer/AuthReducer';
import DrawerReducer from './reducers/DrawerReducer/DrawerReducer';

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //khai bao reducer
    AuthReducer,
    DrawerReducer
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;