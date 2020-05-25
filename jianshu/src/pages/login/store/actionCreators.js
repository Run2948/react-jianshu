import actionTypes from "./actionTypes"
import axios from 'axios'

export const logout = () => ({
    type: actionTypes.LOGOUT,
    value: false
})

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('/api/login?account=' + accout + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {
                alert('登陆失败')
            }
        })
    }
}

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})
