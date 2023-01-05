import React, { Component } from "react";
import Demo from "./components/4_fragment/index";

export default class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>我是App组件</h1>
        {/* <Demo x={101}/> */}
        <Demo/>
      </div>
    );
  }
}
