/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

const color = row => (row % 2 ? "#C3C4C5" : "#F5F3F3");

const nanoToSec = time => {
  var pTime = time.padStart(10, 0);
  var dec = pTime.slice(-9);
  var sec = pTime.slice(0, pTime.length - 9);
  var fTime = parseFloat(`${sec}.${dec}`).toFixed(9);
  return fTime;
};

// eslint-disable-next-line no-unused-vars
const Responses = ({ primes, times, factors }) => {
  return primes.map((prime, i) => {
    const time = times[i]
    const factor = factors && factors[i]
    const falsePrime = factor && factor.includes("*");

    if (time) {
      var fTime = nanoToSec(time);
    }
    return (
      <div
        className="row"
        style={{
          maxHeight: "1.2rem",
          color: falsePrime ? "red" : "black",
          backgroundColor: color(i)
        }}
        key={prime}
      >
        <div className="column">
          <span>Prime: {prime}</span>
          <br></br>
        </div>
        <div className="column">
          <span>Time: {fTime}</span>
        </div>
        {factors && falsePrime? (
          <div className="column">
            <span>Factors: {factor}</span>
          </div>
        ) : null}
      </div>
    );
  });
};

export default ({ results }) => {
  const { totalTime, primes } = results;
   if (!primes) {
    return null;
  }

  return (
    <div>
      <div className="row">
        <div className="column">
          <span style={{ fontWeight: "bold" }}>
            Total calculation time: {totalTime && nanoToSec(totalTime)}
          </span>
        </div>
      </div>
      <Responses {...results} />
    </div>
  );
};
