import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';
import store from './store';
import { actionCreators } from './store/actionCreators';

import 'antd/dist/antd.css';

class App extends Component {

  constructor(props) {
    super(props);
    // console.log(store.getState())
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

    this.handleButtonClick = this.handleButtonClick.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleButtonClick}
          >提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '375px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
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
