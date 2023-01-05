import React, { Component } from "react";
import "./index.css";

export default class Child extends Component {
  state = {
    // users: [
    //   { id: "001", name: "tom", age: 18 },
    //   { id: "002", name: "jack", age: 20 },
    //   { id: "003", name: "Json", age: 24 },
    // ],
    users: "123",
  };

  render() {
    return (
      <div className="child">
        <h1>我是Child组件</h1>
        <ul>
          {this.state.users.map((person) => {
            return (
              <li key={person.id}>
                id为{person.id}，姓名为{person.name}，年龄是{person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
