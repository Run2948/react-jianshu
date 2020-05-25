import React, { Component, Fragment } from 'react';
import Item from './Item';
import axios from 'axios';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    // 当组件的state或者props发生改变时，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 在组件即将被挂在到页面的时刻，自动被执行
  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        <div>
          <label htmlFor='input'>请输入内容：</label>
          <input
            id='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          // ref={(element) => this.input = element}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul
        //  ref={(element) => this.ul = element}
        >
          {
            this.state.list.map((item, index) => {
              return (
                // <li
                //   className='input'
                //   key={index}
                //   onClick={() => this.handleItemDelete(index)}
                //   // dangerouslySetInnerHTML={{__html:item}}
                // >{item}
                // </li> 
                <Item
                  key={item}
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete}
                />
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

  // 组件被挂在到页面之后，自动被执行
  componentDidMount() {
    console.log('componentDidMount');
    
    axios.get('/api/todolist.json')
      .then((res) => {
        console.log(res.data)
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // 组件被更新之前，自动被执行
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 组件被更新之前，自动被执行，但是在 shouldComponentUpdate 返回 true 之后才执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件被更新之后，自动被执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }


  handleInputChange(e) {
    // console.log(this)

    // this.setState({
    //   inputValue: e.target.value
    // });


    const value = e.target.value
    // 使用 ref 的情况
    // const value = this.input.value 
    this.setState(() => ({
      inputValue: value
    }))

  }

  handleButtonClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { // 回调函数，在 setState 异步执行完毕后调用
      // 使用 ref 的情况
      // console.log(this.ul.querySelectorAll('li').length)
    })

    // 使用 ref 的情况
    // console.log(this.ul.querySelectorAll('li').length)
  }

  handleItemDelete(index) {
    // console.log(index)

    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default App;
