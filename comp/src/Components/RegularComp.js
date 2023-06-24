import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log("Regular Component Render")
    return (
      <div>I'm the Regular Component {this.props.name}</div>
    )
  }
}

export default RegularComp