import { actionTypes } from "./actionTypes";

export const actionCreators = {
    getInputChangeAction: (inputValue) => ({
        type: actionTypes.CHANGE_INPUT_VALUE,
        value: inputValue
    }),
    getAddItemAction: () => ({
        type: actionTypes.ADD_TODO_ITEM
    }),
    getDeleteItemAction: (index) => ({
        type: actionTypes.DELETE_TODO_ITEM,
        value: index
    }),
    getInitListAction: (data) => ({
        type: actionTypes.INIT_LIST_ACTION,
        value: data
    })
}