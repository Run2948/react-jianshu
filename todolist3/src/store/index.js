import {createStore} from 'redux';
import reducer from './reducer'

// redux 三大原则：
//  store 是唯一的
//  只有 store 能改变自己的内容
//  reducer 必须是纯函数
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store