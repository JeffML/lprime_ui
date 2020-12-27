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

const Response = ({ prime, fTime, i }) => {
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
      key={prime}
      data_key={prime}
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
};

function* testPrimes(addPrime) {
  const tPrimes = [3, 5, 7];
  let time = Date.now();
  let i = 0;

  for (const prime of tPrimes) {
    console.log("flue!");
    yield prime;
  }
}

export default ({ args, appState }) => {
  const [primes, setPrimes] = useState([]);
  useEffect(() => {
    setPrimes((oldPrimes) =>
      oldPrimes.concat(<Response {...{ prime: 1, key: 1 }} />)
    );
    console.log("foo");
    setTimeout(() => {
      console.log("bar");
      setPrimes((oldPrimes) =>
        oldPrimes.concat(<Response {...{ prime: 2, key: 2 }} />)
      );
    }, 1000);
  }, []);

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
      <div className="row">{primes}</div>
    </div>
  );
};
