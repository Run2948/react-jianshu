import actionTypes from "./actionTypes"
import axios from 'axios'

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        }).catch(() => {

        })
    }
};

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});