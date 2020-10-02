/* eslint-disable no-unused-vars, react/display-name, react/prop-types */
import React from 'react';

  export default ({ aval, setAval, nval, setNval, 
      numPrimes, setNumPrimes, factorize, setFactorize }) => 
  <>
    <div className="row">
      <div className="column">
        <label>A: <input defaultValue={aval} type="number" onChange={(e) => setAval(e.target.value)}></input></label>
      </div><div className="column">
        <label>N: <input defaultValue={nval} type="number" onChange={(e) => setNval(e.target.value)}></input></label>
      </div>
      <div className="column">
        <label>numPrimes: <input defaultValue={numPrimes} type="number" onChange={(e) => setNumPrimes(e.target.value)} style={{ width: '3rem' }}></input></label>
      </div>
      <div className="column">
        <label>False prime check: <input defaultValue={factorize} type="checkbox" onChange={(e) => setFactorize(e.target.checked)} style={{ width: '3rem' }}></input></label>
      </div>
  </div>
</>
