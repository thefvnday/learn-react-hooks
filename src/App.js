import './App.css';
import React, { useState } from 'react';
import FunctionalApp from './FunctionalApp';
import ClassApp from './ClassApp';


function App() {
  const [level,setLevel] = useState(1);

  return (
    <div className='App App-header'>
      <button onClick={()=> setLevel(level+1)}>Add Level</button>
      <FunctionalApp level={level}/>
      <ClassApp/>
    </div>
  )
}

export default App;
