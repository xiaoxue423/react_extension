import React, { PureComponent } from "react";
import "./index.css";
import C from '../1_setState/index'

export default class Parent extends PureComponent {
  render() {
    return (
      <div className="parent">
        <h1>我是Parent组件</h1>
        {/* <A render={(data)=><C name={data} />}/> */}

        <A render={(data)=><B name={data} />}/>
      </div>
    );
  }
}

class A extends PureComponent {
  state = {name:'tom'}

  render() {
    const {name} = this.state;
    return (
      <div className="A">
        <h1>我是A组件</h1>
        {this.props.render(name)}  
      </div>
    );
  }
}

class B extends PureComponent {
  render() {
    console.log('B---render')
    return (
      <div className="B">
        <span>我是B组件</span>
        <h1>我接收到的B组件的值是： {this.props.name}</h1>
      </div>
    );
  }
}

