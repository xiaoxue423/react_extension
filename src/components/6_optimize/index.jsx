import React, { Component,PureComponent } from "react";
import "./index.css";

export default class Parent extends Component {
  state = { carName: "奔驰c" };

  changeCar = () => {
    this.setState({ carName: "迈巴赫" });
    // this.setState({});
  };

  // 手动控制阀门
  shouldComponentUpdate(nextProps,nextState) {
    console.log('this.props',this.props)
    console.log('this.state',this.state) //目前的props和state

    console.log('nextProps',nextProps)//接下来变化的目标props，目标state
    console.log('nextState',nextState)
    // if(this.state.carName === nextState.carName) return false
    // else return true
    return !this.state.carName === nextState.carName
  }

  render() {
    const { carName } = this.state;
    console.log("父组件render");
    return (
      <div className="parent">
        <h1>我是Parent组件</h1>
        <h2>我的车是：{carName}</h2>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName="奥拓" />
      </div>
    );
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps,nextState) {
    console.log('子组件this.props',this.props)
    console.log('子组件nextProps',nextProps)//接下来变化的目标props，目标state

    // if(this.props.carName === nextProps.carName) return false
    // else return true
    return !this.props.carName === nextProps.carName
  }
  render() {
    console.log("子组件render");
    return (
      <div className="child">
        <h1>我是Child组件</h1>
        <h2>我接收到的车是：{this.props.carName}</h2>
      </div>
    );
  }
}
