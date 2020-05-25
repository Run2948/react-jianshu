import { takeEvery, put } from "redux-saga/effects"
import { actionTypes } from "./actionTypes"
import { actionCreators } from './actionCreators';

import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/api/todolist.json')
        const action = actionCreators.getInitListAction(res.data)
        yield put(action)
    } catch (e) {
        console.log(e.message);
    }
}

// generator 函数
function* mySaga() {
    yield takeEvery(actionTypes.GET_INIT_LIST, getInitList)
}

export default mySaga

