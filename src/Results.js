/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef } from "react";
import fPrimes from "./functions/primes";
import Buttons, { STOPPED, RUNNING } from "./Buttons";

const color = (row) => (row % 2 ? "#C3C4C5" : "#F5F3F3");

const nanoToSec = (time) => {
  var pTime = time.toString().padStart(10, 0);
  var dec = pTime.slice(-9);
  var sec = pTime.slice(0, pTime.length - 9);
  var fTime = parseFloat(`${sec}.${dec}`).toFixed(9);
  return fTime;
};

const Response = ({ prime, time, i }) => {
  const numFormat = (n) => {
    return n && n.toString();
  };

  return (
    <div
      className="row"
      style={{
        maxHeight: "3.4rem",
        backgroundColor: color(i),
      }}
    >
      <div className="column">
        <span>Prime: {numFormat(prime)}</span>
        <br></br>
      </div>
      <div className="column">
        <span>Time(sec): {nanoToSec(time)}</span>
      </div>
    </div>
  );
};

export default (args) => {
  const [primes, setPrimes] = useState([]);
  const [appState, setAppState] = useState(STOPPED);
  const primeGen = useRef(fPrimes({ args }));

  useEffect(() => {
    console.log(appState === RUNNING ? "R" : "S");
    if (appState === RUNNING) {
      const next = primeGen.current.next().value;
      if (next) setPrimes((prev) => [next, ...prev]);
    }
  }, [appState, primes]);

  return (
    <div>
      <Buttons {...{ appState, setAppState }} />
      <hr></hr>
      <div className="row">
        {primes.map(({ prime, time, prime: key }) => {
          return <Response {...{ prime, key, time }} />;
        })}
      </div>
    </div>
  );
};
