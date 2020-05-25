import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import Sagas from './sagas'
// redux 三大原则：
//  store 是唯一的
//  只有 store 能改变自己的内容
//  reducer 必须是纯函数

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(Sagas)

export default store