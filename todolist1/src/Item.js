import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 当父组件的render函数被执行时，它的子组件的render也都将重新执行一次
    render() {
        console.log("child - render");
        const { content, test } = this.props
        return (
            <li
                onClick={this.handleClick}
            >{test} - {content}
            </li>
        )
    }

  // 组件被更新之前，自动被执行
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child - shouldComponentUpdate');
    console.log(nextProps.content)
    console.log(this.props.content)
    return (nextProps.content !== this.props.content)
  }

    // 当子组件要从父组件接受参数，子组件第二次存在父组件中并且父组件的 render 函数执行后，自动被执行
    componentWillReceiveProps() {
        console.log('child - componentWillReceiveProps');
    }

    // 在组件即将从页面中剔除时，自动被执行
    componentWillUnmount() {
        console.log('child - componentWillUnmount');
    }

    handleClick() {
        // this.props.deleteItem(this.props.index)
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

// 限制传值类型
Item.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// 给属性添加默认值
Item.defaultProps = {
    test: new Date().toLocaleTimeString()
}


export default Item