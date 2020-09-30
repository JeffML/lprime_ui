import React from 'react';

const getNewPrime = ({ aval, nval, numPrimes, setResults, factorize }) => {
  const url = `https://lprime.netlify.app/.netlify/functions/primes?aval=${aval}&nval=${nval}&numPrimes=${numPrimes}${factorize ? '&factorize=1' : ''}`;

  fetch(url, {})
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