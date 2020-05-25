import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

// redux 三大原则：
//  store 是唯一的
//  只有 store 能改变自己的内容
//  reducer 必须是纯函数
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer);

export default store