
import { useState } from 'react';
import './App.css';
import ClassComponent from './components/classComponents';
import FunctionalComponent from './components/functionalComponent';
import {Routes, Route} from "react-router-dom";



function App() {
  const company = "DevTown";
  const [name, setName] = useState("Rohan")
  return (
  <Routes>
    <Route path='/' element={<ClassComponent />}/>
    <Route path='/fun-comp' element={<FunctionalComponent />}/>
  </Routes>
  )
}

export default App;
