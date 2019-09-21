import React from 'react';

const getPrime = ({ startAt, endingIn, iterations, setResults, factorize }) => {
  const url = `https://lprime.netlify.com/.netlify/functions/primes?startAt=${startAt}&endingIn=${endingIn}&iterations=${iterations}${factorize ? '&factorize=1' : ''}`;

  fetch(url, {})
    // .then(response => { console.log({ response }); return response; })
    .then(response => response.json())
    .then(json => { console.log('fetch', json); return json })
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}

export default ({ startAt, endingIn, iterations, setResults, factorize }) => <div className="row">
  <div className="double-column">
    <input type="button" value="Submit" onClick={() => getPrime({ startAt, endingIn, iterations, setResults, factorize })}></input>
  </div>
</div>