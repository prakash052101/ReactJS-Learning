import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from {this.props.place}!, Welcome to ReactJS Class Props!!</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps