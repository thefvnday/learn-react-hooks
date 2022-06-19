import './App.css';
import React, { useState } from 'react';

function App() {
  //single state
  const [counter, setCounter] = useState(0);
  const [foodies,setFoodies] = useState(['Mie Ayam', 'Bakso', 'Kupat Tahu']);

  const addCounter = () => {
    setCounter(counter + 1);
  }

  const minusCounter = () => {
    setCounter(counter - 1);
  }
  console.log(foodies)
  const addFoodie = () => {
    setFoodies([...foodies,  'Ayam Goreng']);
  }

  //banyak multi state dalam satu variabel
  // const [state, setState] = useState({
  //   counter: 0,
  //   foodies: ['Mie Ayam', 'Bakso', 'Kupat Tahu']
  // })

  // const addCounter= ()=>{
  //   setState({counter:state.counter+1,foodies:['Kwetiau'] })
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nilai Dari State Counter :</h1>
        <h2>{counter}</h2>
        <button onClick={addCounter}>Tambah</button>
        <br />
        <button onClick={minusCounter}>Kurang</button>

        <div className='addString'>
          <h1>Tampilkan String</h1>
          <div>{foodies.map((foodie) => <p>{foodie}</p>)}</div>
          <button onClick={addFoodie}>Tambah</button>
        </div>
      </header>
    </div>
  );
}

export default App;
