/* eslint-disable no-unused-vars, react/display-name, react/prop-types */
import React, { useEffect } from "react";

export default ({ nval, setNval, numPrimes, setNumPrimes }) => {
  return (
    <>
      <div className="row">
        <div className="column">
          <label>
            N:{" "}
            <input
              type="number"
              value={nval || ""}
              onChange={(e) => {
                setNval(e.target.value);
              }}
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
    </>
  );
};
