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
const Responses = ({ primes, times }) => {
  return primes.map((prime, i) => {
    const time = times[i].toString()
    const numFormat = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    if (time) {
      var fTime = nanoToSec(time);
    }
    return (
      <div
        className="row"
        style={{
          maxHeight: "1.2rem",
          backgroundColor: color(i)
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
