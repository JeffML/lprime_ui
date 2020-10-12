import React, { useState } from "react";
import factor from "./functions/factorize";

export default ({ primes }) => {
  const [factors, setFactors] = useState([]);

  const numFormat = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getFactors = () => {
    if (!primes) return;

    const list = primes.reduce((a, b) => {
      const factors = factor(b);
      if (factors !== b.toString()) {
        a.push({ falsePrime: b, factors });
      }
      return a;
    }, []);

    setFactors(list);
  };

  const Factors = () => {
    return factors.map(({ falsePrime, factors }) => {
      return (
        <div className="row">
          <div className="column">
            <span>False Prime: {numFormat(falsePrime)}</span>
            <br></br>
          </div>
          <div className="column">
            <span>factors: {factors}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="row">
        <div className="double-column">
          <input type="button" value="Factorize" onClick={() => getFactors()} />
        </div>
      </div>

      <Factors />
    </>
  );
};
