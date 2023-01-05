import React, { Component } from "react";
import Demo from "./components/3_setHook/index";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <Demo x={101}/>
      </div>
    );
  }
}
