/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { RUNNING } from "./Buttons";
import fPrimes from "./functions/primes";

const color = (row) => (row % 2 ? "#C3C4C5" : "#F5F3F3");
let init = true;

const nanoToSec = (time) => {
  var pTime = time.toString().padStart(10, 0);
  var dec = pTime.slice(-9);
  var sec = pTime.slice(0, pTime.length - 9);
  var fTime = parseFloat(`${sec}.${dec}`).toFixed(9);
  return fTime;
};

const Responses = ({ primes, times }) => {
  if (!primes.length) {
    return null;
  }

  return primes.map((prime, i) => {
    let time = times.length && times[i].toString();

    const numFormat = (n) => {
      return n.toString(); //.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    if (time) {
      if (navigator.userAgent.includes("Firefox")) time *= 10000;
      var fTime = nanoToSec(time);
    }
    return (
      <div
        className="row"
        style={{
          maxHeight: "3.4rem",
          backgroundColor: color(i),
        }}
        key={prime}
      >
        <div className="column">
          <span>Prime: {numFormat(prime)}</span>
          <br></br>
        </div>
        <div className="column">
          <span>Time(sec): {fTime}</span>
        </div>
      </div>
    );
  });
};

export default ({ args, appState }) => {
  const [primes, setPrimes] = useState([]);
  const [times, setTimes] = useState([]);
  let localPrimes = [];

  useEffect(() => console.log({ primes }), [primes]);

  const addPrime = (prime) => {
    localPrimes = [...localPrimes, prime];
    setPrimes([...localPrimes]);
    console.log({ prime });
  };

  const addTime = (time) => {
    setTimes([...times, time]);
  };

  if (appState === RUNNING && init) {
    init = false;
    fPrimes({ args, addPrime, addTime });
    // setTotalPrimeTime(totalPrimeTime);
  } else {
    init = true;
  }

  return (
    <div>
      <div>{appState === RUNNING ? "Running..." : "Stopped"}</div>
      <div className="row">
        <div className="column">
          <span style={{ fontWeight: "bold" }}>
            Total calculation time:{" "}
            {/* {totalPrimeTime && nanoToSec(totalPrimeTime)} */}
          </span>
        </div>
      </div>
      <Responses {...{ primes, times }} />
    </div>
  );
};
