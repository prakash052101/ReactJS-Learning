import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import FC from './Components/functionalComponents';
import {ClassComp1} from './Components/classComponents';
import Counter from './Components/Counter';
import Click from './Components/click'
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>Hello, Welcome to React Learning</h1> 
      <h2>This part is about Components</h2>
      <FC></FC>
      {/* <ClassComp></ClassComp> */}
      <ClassComp1></ClassComp1>
      <Click></Click>
      <Counter></Counter>
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;
  