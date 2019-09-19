import React, { useState } from 'react';
import './App.css';
import Inputs from './Inputs';
import Buttons from './Buttons'
import Results from './Results'

function App() {
  const [startAt, setStartAt] = useState(10);
  const [endingIn, setEndingIn] = useState(1)
  const [results, setResults] = useState([]);
  const [iterations, setIterations] = useState(1);
  const [factorize, setFactorize] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        L-prime UI
      </header>
      <Inputs {...{ startAt, endingIn, setStartAt, setEndingIn, iterations, setIterations, factorize, setFactorize }} />
      <Buttons {...{ startAt, endingIn, iterations, setResults, factorize }} />
      <hr></hr>
      <Results {...{ results }} />
    </div>
  );
}

export default App;
