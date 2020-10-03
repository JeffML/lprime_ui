import React from 'react';

const getNewPrime = ({ aval, nval, cval, dval, magicNum, numPrimes, setResults, factorize }) => {
  const FUNCTIONS = process.env.REACT_APP_FUNCTIONS || `https://lprime.netlify.app/`
  const url = `${FUNCTIONS}.netlify/functions/primes?aval=${aval}&nval=${nval}cval=${cval}&dval=${dval}&magicNum=${magicNum}&numPrimes=${numPrimes}${factorize ? '&factorize=1' : ''}`;

  fetch(url, {headers: {accept: "Accept: application/json"}})
    .then(response => response.json())
    .then(json => { console.log('fetch', json); return json })
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}

const getPrime = args => {
    getNewPrime(args);
}

// eslint-disable-next-line react/display-name
export default (args) => <div className="row">
  <div className="double-column">
    <input type="button" value="Submit" onClick={() => getPrime(args)}></input>
  </div>
</div>