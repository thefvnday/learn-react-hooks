import './App.css';
import React, { useState } from 'react';
import FunctionalApp from './FunctionalApp';
import ClassApp from './ClassApp';
import CleanUp1 from './hooks/CleanUp1';
import CleanUp2 from './hooks/CleanUp2';
import CleanUp3 from './hooks/CleanUp3';
import CleanUp4 from './hooks/CleanUp4';


function App() {
  const [level,setLevel] = useState(1);

  return (
    <div className='App App-header'>
      {/* <button onClick={()=> setLevel(level+1)}>Add Level</button> */}
      {/* <FunctionalApp level={level}/>
      <ClassApp/> */}
      {/* <CleanUp1/> */}
      {/* <CleanUp2/> */}
      {/* <CleanUp3/> */}
      <CleanUp4/>
    </div>
  )
}

export default App;
