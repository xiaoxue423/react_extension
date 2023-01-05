import React, { Component } from "react";
import Child from "./Child";
import './index.css'

export default class Parent extends Component {
  state = {
    hasError: "", //用户标识子组件是否产生错误
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: error,
    };
  }

  componentDidCatch(error,info){
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
    console.log('error******',error);
    console.log('info',info)
  }

  render() {
    return (
      <div>
        <h1>我是Parent组件</h1>
        {this.state.hasError ? <h2 className="errorMsg">当前网络不稳定，稍后再试</h2> : <Child />}
      </div>
    );
  }
}
