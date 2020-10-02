/* eslint-disable no-unused-vars, react/display-name, react/prop-types */
import React from 'react';

  export default ({ aval, setAval, nval, setNval, cval, setCval, dval, setDval,
      numPrimes, setNumPrimes, factorize, setFactorize }) => 
  <>
    <div className="row">
      <div className="column" style={{width:'10em'}}>
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
  <div className="row">
      <div className="column" style={{width:'10em'}}>
        <label>C: <input defaultValue={cval} type="number" onChange={(e) => setCval(e.target.value)}></input></label>
      </div><div className="column">
        <label>D: <input defaultValue={dval} type="number" onChange={(e) => setDval(e.target.value)}></input></label>
      </div>
      <div className="column"></div>
      <div className="column"></div>
  </div>
</>
