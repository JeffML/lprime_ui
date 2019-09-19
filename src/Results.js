import React from 'react';

const color = (row) => row % 2 ? '#C3C4C5' : "#F5F3F3"

export default ({ results }) => results.reduce((acc, r) => {
  const lastPrime = acc.length && acc.slice(-1)[0].prime;
  console.log({ prime: r.prime, lastPrime })
  if (r.prime !== lastPrime) {
    acc.push(r)
  }
  return acc;
}, []).map((result, i) => {
  const { prime, time } = result;
  if (time) {
    var pTime = time.padStart(10, 0)
    var dec = pTime.slice(-9)
    var sec = pTime.slice(0, pTime.length - 9)
    var fTime = parseFloat(`${sec}.${dec}`).toFixed(9)
  }
  return <div className="row" style={{ maxHeight: '1.2rem', backgroundColor: color(i) }} key={prime}>
    <div className="column">
      <span>Prime: {prime}</span><br></br>
    </div>
    <div className="column">
      <span>Time: {fTime}</span>
    </div>
  </div>
})