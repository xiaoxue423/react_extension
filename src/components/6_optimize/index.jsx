import React, { Component,PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "奔驰c",persons:['小李','小王','小红'] };

  changeCar = () => {
    // this.setState({ carName: "迈巴赫" });

    // this.setState({});

    const obj = this.state;
    obj.carName = '迈巴赫'
    console.log(obj === this.state)   //true
    this.setState(obj)
  };

  addPerson = ()=>{
    const {persons} = this.state
    this.setState({persons:['小白',...persons]})
  }

  // 手动控制阀门
/*   shouldComponentUpdate(nextProps,nextState) {
    console.log('this.props',this.props)
    console.log('this.state',this.state) //目前的props和state

    console.log('nextProps',nextProps)//接下来变化的目标props，目标state
    console.log('nextState',nextState)
    // if(this.state.carName === nextState.carName) return false
    // else return true
    return !this.state.carName === nextState.carName
  } */

  render() {
    const { carName } = this.state;
    console.log("父组件render");
    return (
      <div className="parent">
        <h1>我是Parent组件</h1>
        <h2>{this.state.persons}</h2>
        <h2>我的车是：{carName}</h2>
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addPerson}>添加一人</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends PureComponent {
/*   shouldComponentUpdate(nextProps,nextState) {
    console.log('子组件this.props',this.props)
    console.log('子组件nextProps',nextProps)//接下来变化的目标props，目标state

    // if(this.props.carName === nextProps.carName) return false
    // else return true
    return !this.props.carName === nextProps.carName
  } */
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
