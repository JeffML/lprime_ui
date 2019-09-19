import React from 'react';

const getPrime = ({ startAt, endingIn, iterations, setResults }) => {
  const url = `https://lprime.netlify.com/.netlify/functions/primes?startAt=${startAt}&endingIn=${endingIn}&iterations=${iterations}`;

  fetch(url, {})
    .then(response => { console.log({ response }); return response; })
    .then(response => response.json())
    .then(json => { console.dir(json); return json })
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}
export default ({ startAt, endingIn, iterations, setResults }) => <div className="row">
  <div className="double-column">
    <input type="button" value="Submit" onClick={() => getPrime({ startAt, endingIn, iterations, setResults })}></input>
  </div>
</div>