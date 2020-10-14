/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import Results from "./Results";
import FalsePrimes from "./FalsePrimes.js";

function App() {
  const [aval, setAval] = useState(0);
  const [nval, setNval] = useState(0);
  const [cval, setCval] = useState(0);
  const [dval, setDval] = useState(0);
  const [adder, setAdder] = useState(0);
  const [numPrimes, setNumPrimes] = useState(1);
  const [results, setResults] = useState({});
  const [totalPrimeTime, setTotalPrimeTime] = useState(0);
  const args = { aval, nval, cval, dval, adder, numPrimes };

  return (
    <div className="App">
      <header className="App-header">L-prime UI</header>

      <Inputs
        {...{
          aval,
          nval,
          setAval,
          setNval,
          cval,
          setCval,
          dval,
          setDval,
          adder,
          setAdder,
          numPrimes,
          setNumPrimes,
        }}
      />
      <Buttons {...{ args, setResults, setTotalPrimeTime }} />
      <hr></hr>
      <Results {...{ results, totalPrimeTime }} />
      <div className="row"></div>
      <hr></hr>
      <FalsePrimes {...{ primes: results.primes }} />
    </div>
  );
}

export default App;
