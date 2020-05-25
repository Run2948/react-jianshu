import React from 'react';
import { connect } from "react-redux";
import { actionTypes } from './store/actionTypes';

const App = (props) => {

    const { inputValue, list, handleInputChange, handleButtonClick, handleItemClick } = props

    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleButtonClick}
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index} onClick={() => handleItemClick(index)}> {item}</li>)
                    })
                }
            </ul>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            // console.log(e.target.value);
            const action = {
                type: actionTypes.INPUT_VALUE_CHANGE,
                value: e.target.value
            }
            dispatch(action)
        },
        handleButtonClick() {
            const action = {
                type: actionTypes.ADD_TODO_ITEM
            }
            dispatch(action)
        },
        handleItemClick(index) {
            const action = {
                type: actionTypes.DELETE_TODO_ITEM,
                value: index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);