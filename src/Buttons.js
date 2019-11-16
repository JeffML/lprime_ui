import React from 'react';

const getOldPrime = ({ startAt, endingIn, iterations, setResults, factorize }) => {
  const url = `https://lprime.netlify.com/.netlify/functions/primes?startAt=${startAt}&endingIn=${endingIn}&iterations=${iterations}${factorize ? '&factorize=1' : ''}`;

  fetch(url, {})
    .then(response => response.json())
    .then(json => { console.log('fetch', json); return json })
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}

const getNewPrime = ({ startAt, endingIn, iterations, setResults, factorize }) => {
  const url = `https://lprime.netlify.com/.netlify/functions/primes-gen-no-dupes?startAt=${startAt}&endingIn=${endingIn}&iterations=${iterations}${factorize ? '&factorize=1' : ''}`;

  fetch(url, {})
    .then(response => response.json())
    .then(json => { console.log('fetch', json); return json })
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}

const getPrime = args => {
  if (args.method === 'old') {
    getOldPrime(args);
  } else {
    getNewPrime(args);
  }
}

export default (args) => <div className="row">
  <div className="double-column">
    <input type="button" value="Submit" onClick={() => getPrime(args)}></input>
  </div>
</div>