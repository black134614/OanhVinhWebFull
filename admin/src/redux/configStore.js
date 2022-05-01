import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import createMiddleWareSaga from 'redux-saga';
import LoadingReducer from './reducers/LoadingReducer';
import { rootSaga } from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;