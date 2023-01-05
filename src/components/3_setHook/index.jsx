import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  state = { count: 0 };
  add = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState((state)=>({count:state.count+1}))
    },1000)
  }

  // 卸载组件的回调
  unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  myRef = React.createRef()

  show = ()=>{
    alert(this.myRef.current.value)
  }
  render() {
    return (
      <div>
        <h1>我是Demo的类式组件</h1>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>点我卸载组件</button>
        <input type="text" ref={this.myRef}/>
        <button onClick={this.show}>点击展示数据</button>
      </div>
    );
  }
}

// function Demo() {
//   const [count, setCount] = useState(5);
//   const [name, setName] = useState("tom");

//   useEffect(() => {
//     console.log("@");
//     let timer = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     return ()=>{
//       console.log("useEffect第一个参数是一个函数，该函数返回的一个函数就相当于componentWillUnmount")
//       clearInterval(timer)  //清除定时器
//     }
//   }, []); //空数组代表谁也不监测，相当于componentDidMount生命周期钩子

//   function add() {
//     // setCount(count+1) //第一种写法
//     setCount((count) => {
//       //第二种写法函数形式
//       return count + 1;
//     });
//   }

//   function changeName() {
//     setName("jack");
//   }

//   function unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   return (
//     <div>
//       <h1>我是Demo的函数式组件</h1>
//       <h2>当前求和为：{count}</h2>
//       <button onClick={add}>点我+1</button>
//       <h2>我的名字是：{name}</h2>
//       <button onClick={changeName}>点我修改名字</button>
//       <button onClick={unmount}>点我卸载组件</button>
//     </div>
//   );
// }

export default Demo;
