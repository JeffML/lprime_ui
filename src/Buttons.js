import React, { useState } from "react";
import fPrimes from "./functions/primes";

export default ({ args, setPrimes, setTimes, setTotalPrimeTime }) => {
  const [enabled, setEnabled] = useState(true);

  const action = (args) => {
    setEnabled(false);

    const { totalPrimeTime } = fPrimes(args, setPrimes, setTimes);
    setTotalPrimeTime(totalPrimeTime);
    setEnabled(true);
  };

  return (
    <div className="row">
      <div className="double-column">
        <input
          type="button"
          value="Submit"
          disabled={!enabled}
          onClick={() => action(args)}
        ></input>
      </div>
    </div>
  );
};
