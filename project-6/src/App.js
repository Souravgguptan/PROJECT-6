
import { useState } from 'react';
import './App.css';
import ClassComponent from './components/classComponents';
import FunctionalComponent from './components/functionalComponent';



function App() {
  const company = "DevTown";
  const [name, setName] = useState("Rohan")
  return (
    <div>
      <h1>This is a function component</h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent name={name} age={23} company={company} setName={setName}></FunctionalComponent>
      </div>
  );
}

export default App;
