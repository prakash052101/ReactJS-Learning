import React, { Component } from 'react'
import BellA from "./BellA.png"
import BellB from "./BellB.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Blogipedia",
         sub: "Subscribe",
         imageURL: BellA
      };
    }
    styles={
        fontStyle: "italic",
        color: "purple"
    }

    ButtonChange=()=>{
        this.setState({
            message: "Hit the Bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange=()=>{
        this.setState({
            imageURL: BellB,
            message: "Thank You!"
        })
    }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p/>
        <img 
            style={{width: "30px", height: "30px"}} 
            src={this.state.imageURL} 
            onClick={this.imageChange}
            alt=''
        />
      </div>
    )
  }
}

export default NewComp