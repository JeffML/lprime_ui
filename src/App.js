/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Inputs from './Inputs';
import Buttons from './Buttons'
import Results from './Results'
import Defaults from './Defaults'

function App() {
  const [aval, setAval] = useState(1)
  const [nval, setNval] = useState(29)
  const [cval, setCval] = useState(25)
  const [dval, setDval] = useState(29)
  const [adder, setAdder] = useState(223092870)
  const [numPrimes, setNumPrimes] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPrimeTime, setTotalPrimeTime] = useState(0)
  const args = { aval, nval, cval, dval, adder, numPrimes}

  return (
    <div className="App">
      <header className="App-header">
        L-prime UI
      </header>
      <Defaults {...{setAval, adder, setNval, setCval, setDval, setAdder}} />
      <Inputs {...{ aval, nval, setAval, setNval, cval, setCval, 
        dval, setDval, adder, setAdder,
        numPrimes, setNumPrimes, }} />
      <Buttons {...{args, setResults, setTotalPrimeTime}} />
      <hr></hr>
      <Results {...{ results, }} />
    </div>
  );
}

export default App;
