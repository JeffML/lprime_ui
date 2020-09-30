/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Inputs from './Inputs';
import Buttons from './Buttons'
import Results from './Results'

function App() {
  const [aval, setAval] = useState(1);
  const [nval, setNval] = useState(29)
  const [results, setResults] = useState({ totalTime: "0", responses: [] });
  const [numPrimes, setNumPrimes] = useState(1);
  const [factorize, setFactorize] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        L-prime UI
      </header>
      <Inputs {...{ aval, nval, setAval, setNval, 
        numPrimes, setNumPrimes, factorize, setFactorize }} />
      <Buttons {...{ aval, nval, numPrimes, setResults, factorize, }} />
      <hr></hr>
      <Results {...{ results, }} />
    </div>
  );
}

export default App;
