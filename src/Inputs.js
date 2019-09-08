import React from 'react';

export default ({ startAt, setStartAt, setEndingIn }) => <div className="row">
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
</div>
