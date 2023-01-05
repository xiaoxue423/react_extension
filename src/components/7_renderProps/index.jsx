import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  render() {
    return (
      <div className="parent">
        <h1>我是Parent组件</h1>
        <A>
          <B/>
        </A>
      </div>
    );
  }
}

class A extends PureComponent {
  state = {name:'tom'}

  render() {
    console.log('A组件',this.props)
    return (
      <div className="A">
        <h1>我是A组件</h1>
        {this.props.children}
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
      </div>
    );
  }
}

