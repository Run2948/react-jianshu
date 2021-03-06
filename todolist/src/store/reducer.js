import { actionTypes } from "./actionTypes"

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    if (action.type === actionTypes.INPUT_VALUE_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === actionTypes.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, newState.inputValue]
        newState.inputValue = ''
        return newState
    }

    if (action.type === actionTypes.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }

    return state;
}