/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Inputs from "./Inputs";

import Results from "./Results";
import FalsePrimes from "./FalsePrimes.js";

function App() {
  const [nval, setNval] = useState(31); //useState(31);
  const [cval, setCval] = useState(7); //useState(7);
  const [dval, setDval] = useState(11); //useState(11);
  const [adder, setAdder] = useState(30); //useState(2310);
  const [numPrimes, setNumPrimes] = useState(1);

  return (
    <div className="App">
      <header className="App-header">L-prime UI</header>

      <Inputs
        {...{
          nval,
          setNval,
          numPrimes,
          setNumPrimes,
        }}
      />

      <Results {...{ nval, cval, dval, adder, numPrimes }} />

      <div className="row"></div>
      <hr></hr>
      {/* <FalsePrimes {...{ primes }} /> */}
    </div>
  );
}

export default App;
