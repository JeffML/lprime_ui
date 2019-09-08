import React from 'react';

export default ({ results: { prime, time } }) => {
  if (time) {
    var pTime = time.padStart(10, 0)
    var dec = pTime.slice(-9)
    var sec = pTime.slice(0, pTime.length - 9)
    var fTime = parseFloat(`${sec}.${dec}`).toFixed(9)
  }
  return <div className="row">
    <div className="column">
      <span>Prime: {prime}</span><br></br>
    </div>
    <div className="column">
      <span>Time: {fTime}</span>
    </div>
  </div>
}