import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         name: "Learning React"
      };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "React-Components"
            });
        }, 3000);
    }
  render() {
    console.log("Parent Component Render")
    return (
      <div>
        I'm the Parent Component
        <RegularComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    );
  }
}

export default ParentComp