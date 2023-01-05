import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <Fragment key={1}>
        <input type="text" placeholder='请输入姓名'/>
        <input type="text" placeholder='请输入年龄'/>
      </Fragment>
    )
  }
}
