import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      list: []
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(element) => element.style.color = 'blue'}
          appear={true} // 第一次动画效果
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>切换</button>

        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(element) => element.style.color = 'blue'}
                  appear={true} // 第一次动画效果
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>添加</button>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  handleAddItem() {
    this.setState(() => ({
      list: [...this.state.list, 'item']
    }))
  }
}

export default App;
