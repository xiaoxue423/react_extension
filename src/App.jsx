import React, { Component } from "react";
import Demo from "./components/7_renderProps/index";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Demo x={101}/> */}
        <Demo/>
      </div>
    );
  }
}
