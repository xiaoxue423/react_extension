import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    //1、获取原来的count值
    const { count } = this.state;

    //2、更新状态
    this.setState({ count: count + 1 },()=>{
      console.log('count的值为',this.state.count) //1
    });
    // console.log('count的值为',this.state.count) //0
  };

  render() {
    return (
      <div>
        <h1>我是Demo组件</h1>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
