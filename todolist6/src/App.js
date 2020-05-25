import React, { Component } from 'react';
import AppUI from './AppUI';

import 'antd/dist/antd.css';

import store from './store';
import { actionCreators } from './store/actionCreators';


class App extends Component {

  constructor(props) {
    super(props);
    // console.log(store.getState())
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return <AppUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleButtonClick={this.handleButtonClick}
      handleItemDelete={this.handleItemDelete}
    />
  }

  componentDidMount() {
    // axios.get('/api/todolist.json')
    //   .then((res) => {
    //     console.log(res);
    //     const action = actionCreators.getInitListAction(res.data)
    //     store.dispatch(action)
    //   }).catch((err) => {
    //     console.log(err);
    //   })

    const action = actionCreators.getInitList()
    store.dispatch(action)
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    // const action = {
    //   type: actionTypes.CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = actionCreators.getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    // console.log('store changed')
    this.setState(store.getState())
  }

  handleButtonClick() {
    // const action = {
    //   type: actionTypes.ADD_TODO_ITEM
    // }
    const action = actionCreators.getAddItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // const action = {
    //   type: actionTypes.DELETE_TODO_ITEM,
    //   value: index
    // }
    const action = actionCreators.getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default App;
