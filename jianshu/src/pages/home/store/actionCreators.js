import actionTypes from "./actionTypes"
import { fromJS } from 'immutable'
import axios from 'axios'

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home').then((res) => {
            const result = res.data.data;
            dispatch(changHomeData(result));
        });
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    }
}

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
})

const changHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})