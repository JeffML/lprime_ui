import React from 'react';

const getPrime = ({ startAt, endingIn, setResults }) => {
  const url = `https://lprime.netlify.com/.netlify/functions/test?startAt=${startAt}&endingIn=${endingIn}`;

  console.log(url)

  fetch(url, {})
    .then(response => response.json())
    .then(json => setResults(json))
    .catch(e => console.error(e.toString()))
}
export default ({ startAt, endingIn, setResults }) => <div className="row">
  <div className="double-column">
  <input type="button" value="Submit" onClick={() => getPrime({ startAt, endingIn, setResults })}></input>
  </div>
</div>