/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Inputs from "./Inputs";
import Buttons, { STOPPED, RUNNING } from "./Buttons";
import Results from "./Results";
import FalsePrimes from "./FalsePrimes.js";

function App() {
  const [nval, setNval] = useState(0); //useState(31);
  const [cval, setCval] = useState(7); //useState(7);
  const [dval, setDval] = useState(11); //useState(11);
  const [adder, setAdder] = useState(30); //useState(2310);
  const [numPrimes, setNumPrimes] = useState(1);
  const [appState, setAppState] = useState(STOPPED);

  const args = { nval, cval, dval, adder, numPrimes };

  return (
    <div className="App">
      <header className="App-header">L-prime UI</header>

      <Inputs
        {...{
          nval,
          setNval,
          cval,
          dval,
          adder,
          numPrimes,
          setNumPrimes,
        }}
      />
      <Buttons {...{ appState, setAppState }} />
      <hr></hr>
      <Results {...{ args, appState }} />
      <div className="row"></div>
      <hr></hr>
      {/* <FalsePrimes {...{ primes }} /> */}
    </div>
  );
}

export default App;
