import React, { Component } from "react";
import "./index.css";

//创建Context容器对象
const MyContext = React.createContext();

const { Provider, Consumer } = MyContext;

export default class A extends Component {
  state = { username: "胡雪", age: 24 };

  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h1>我是A组件</h1>
        <h2>我的用户名是：{username}</h2>
        <h2>我的年龄是：{age}</h2>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="son">
        <h1>我是B组件</h1>
        <h2>我从A组件接收到的用户名是：{this.props.username}</h2>
        <C />
      </div>
    );
  }
}

/* class C extends Component {
  static contextType = MyContext;  //声明接收context

  render() {
    console.log("C组件的", this);
    console.log("C组件的", this.context);
    const {age,username} = this.context
    return (
      <div className="grand">
        <h1>我是C组件</h1>
        <h2>我从A组件接收到的用户名是：{username}，年龄是{age}</h2>
      </div>
    );
  }
} */

function C() {
  return (
    <div className="grand">
      <h1>我是C组件</h1>
      <h2>我从A组件接收到的用户名是：</h2>
      
      <Consumer>
        {(value) => {
          console.log("value", value);
          return `${value.username}，年龄是${value.age}`;
        }}
      </Consumer>
    </div>
  );
}
