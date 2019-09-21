/* global BigInt */
import React from 'react';

const color = (row) => row % 2 ? '#C3C4C5' : "#F5F3F3"

const nanoToSec = (time) => {
  var pTime = time.padStart(10, 0)
  var dec = pTime.slice(-9)
  var sec = pTime.slice(0, pTime.length - 9)
  var fTime = parseFloat(`${sec}.${dec}`).toFixed(9)
  return fTime;
}

const ZERO = BigInt(0)

function filterDupes(primes) {
  return primes.reduce((acc, r) => {
    const lastPrime = acc.uniqPrimes.length && acc.uniqPrimes.slice(-1)[0].prime;
    if (r.prime !== lastPrime) {
      acc.sumOfPrimeTimes += BigInt(r.time);
      acc.uniqPrimes.push(r);
    }
    return acc;
  }, { sumOfPrimeTimes: ZERO, uniqPrimes: [] });
}

const Responses = ({ primes }) => {

  return primes.map((result, i) => {
    const { prime, time, factors } = result;
    const falsePrime = factors && factors.includes('*')

    if (time) {
      var fTime = nanoToSec(time)
    }
    return <div className="row" style={{ maxHeight: '1.2rem', color: falsePrime ? 'red' : 'black', backgroundColor: color(i) }} key={prime}>
      <div className="column">
        <span>Prime: {prime}</span><br></br>
      </div>
      <div className="column">
        <span>Time: {fTime}</span>
      </div>
      {factors ?
        <div className="column">
          <span>Factors: {factors}</span>
        </div> : null}
    </div>
  });
}

export default ({ results }) => {
  console.log({ results })
  const { totalTime, responses } = results;
  const { sumOfPrimeTimes, uniqPrimes } = filterDupes(responses)

  return <div>
    <div className="row">
      <div className="column">
        <span style={{ fontWeight: 'bold' }}>Total run time: {totalTime && nanoToSec(totalTime)}</span>
      </div>
      <div className="column">
        <span style={{ fontWeight: 'bold' }}>Sum of prime times: {sumOfPrimeTimes && nanoToSec(sumOfPrimeTimes.toString())}</span>
      </div>
    </div>
    <Responses {...{ primes: uniqPrimes }} />
  </div>
};


