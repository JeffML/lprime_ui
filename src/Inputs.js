import React from 'react';

export default ({ startAt, setStartAt, setEndingIn, iterations, setIterations, factorize, setFactorize }) => <div className="row">
  <div className="column">
    <label>Start At: <input defaultValue={startAt} type="number" onChange={(e) => setStartAt(e.target.value)}></input></label>
  </div><div className="column">
    <label>Ending in: <select onChange={(e) => setEndingIn(e.target.value)}>
      <option value="1">1</option>
      <option value="3" >3</option>
      <option value="7" >7</option>
      <option value="9">9</option>
    </select>
    </label></div>
  <div className="column">
    <label>iterations: <input defaultValue={iterations} type="number" onChange={(e) => setIterations(e.target.value)} style={{ width: '3rem' }}></input></label>
  </div>
  <div className="column">
    <label>factorize: <input defaultValue={factorize} type="checkbox" onChange={(e) => setFactorize(e.target.checked)} style={{ width: '3rem' }}></input></label>
  </div>
</div>
