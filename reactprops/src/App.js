import logo from './logo.svg';
import './App.css';
import ClassProps from './ClassProps';
import FunctionalProps from './FunctionalProps';

function App() {
  return (
    <div>
      <ClassProps name="Learner 1" place ="Place X"><p>Child Component</p></ClassProps>
      <ClassProps name="Learner 2" place ="Place Y"><button>Click</button></ClassProps>
      <ClassProps name="Learner 3" place ="Place Z"/>
      <FunctionalProps name="Learner 4" place ="Place A"></FunctionalProps>
    </div>
  );
}

export default App;
