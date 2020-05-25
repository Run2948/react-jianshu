import actionTypes from "./actionTypes"
import constants from '../../../constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const getSearchList = () => {
    return (dispatch) => {
        axios.get('/api/headerList').then((res) => {
            console.log(res.data);
            const data = res.data
            dispatch(changeList(data.data))
        }).catch((err) => {
            console.log(err.message);
        })
    }
};

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / constants.pageSize)
});
