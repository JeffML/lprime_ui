/* eslint-disable no-unused-vars, react/display-name, react/prop-types */
import React, { useEffect } from "react";

export default ({
  // aval,
  // setAval,
  nval,
  setNval,
  // cval,
  // setCval,
  // dval,
  // setDval,
  // adder,
  // setAdder,
  numPrimes,
  setNumPrimes,
}) => {
  return (
    <>
      <div className="row">
        {/* <div className="column" style={{ width: "10em" }}>
          <label>
            A:{" "}
            <input
              type="number"
              value={aval || ""}
              onChange={(e) => setAval(e.target.value)}
            ></input>
          </label>
        </div> */}
        <div className="column">
          <label>
            N:{" "}
            <input
              type="number"
              value={nval || ""}
              onChange={(e) => setNval(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="column">
          <label>
            # of primes:{" "}
            <input
              defaultValue={numPrimes}
              type="number"
              onChange={(e) => setNumPrimes(e.target.value)}
              style={{ width: "3rem" }}
            ></input>
          </label>
        </div>
      </div>
      {/* <div className="row">
        <div className="column" style={{ width: "10em" }}>
          <label>
            C:{" "}
            <input
              type="number"
              value={cval || ""}
              onChange={(e) => setCval(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="column">
          <label>
            D:{" "}
            <input
              type="number"
              value={dval || ""}
              onChange={(e) => setDval(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="column">
          <label>
            Z:{" "}
            <input
              value={adder || ""}
              type="number"
              onChange={(e) => setAdder(e.target.value)}
            ></input>
          </label>
        </div>
      </div> */}
    </>
  );
};
