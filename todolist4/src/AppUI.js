import React, { Fragment } from 'react';
import { Button, Input, List } from 'antd';

// 无状态组件,优势： 性能较高，因为其实质就是一个函数，不需要生命周期函数
const APPUI = (props) =>{
  return (<Fragment>
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: '300px', marginRight: '10px' }}
        onChange={props.handleInputChange}
      />
      <Button
        type="primary"
        onClick={props.handleButtonClick}
      >提交</Button>
    </div>
    <List
      style={{ marginTop: '10px', marginLeft: '10px', width: '375px' }}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (
        // <List.Item onClick={props.handleItemDelete.bind(this,index)}>
        <List.Item onClick={() => props.handleItemDelete(index)}>
          {item}
        </List.Item>
      )}
    />
  </Fragment>)
}

// class APPUI extends Component {
//     render(){
//         return (<Fragment>
//             <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//               <Input
//                 value={this.props.inputValue}
//                 placeholder="todo info"
//                 style={{ width: '300px', marginRight: '10px' }}
//                 onChange={this.props.handleInputChange}
//               />
//               <Button
//                 type="primary"
//                 onClick={this.props.handleButtonClick}
//               >提交</Button>
//             </div>
//             <List
//               style={{ marginTop: '10px', marginLeft: '10px', width: '375px' }}
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item, index) => (
//                 // <List.Item onClick={this.props.handleItemDelete.bind(this,index)}>
//                 <List.Item onClick={() => this.props.handleItemDelete(index)}>
//                   {item}
//                 </List.Item>
//               )}
//             />
//           </Fragment>)
//     }
// }

export default APPUI