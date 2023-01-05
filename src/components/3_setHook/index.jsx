import React, { Component, useState } from "react";

// class Demo extends Component {
//   state = { count: 0 };

//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>我是Demo组件</h1>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//       </div>
//     );
//   }
// }

function Demo() {
  console.log("Demo");
  const [count, setCount] = useState(5);

  function add() {
    // setCount(count+1) //第一种写法

    setCount((count) => { //第二种写法
      return count + 1;
    });
  }
  return (
    <div>
      <h1>我是Demo组件</h1>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
    </div>
  );
}

export default Demo;
