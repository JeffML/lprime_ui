import React from 'react'

const Default = (args) => {
  return <div className="row">
  <div className="column">
    <input type="button" value="MINUS11" onClick={({target}) => setDefaults({value: target.value, ...args})}></input>
    <input type="button" value="MINUS23" onClick={({target}) => setDefaults({value: target.value, ...args})}></input>
  </div>
</div>
}

const setDefaults = ({value, setAval, setNval, setCval, setDval, setMagicNum}) => {
  switch (value) {
    case 'MINUS11': 
      setAval(1)
      setNval(29)
      setCval(13)
      setDval(17)
      setMagicNum(2310)
      break;
    case 'MINUS23': 
      setAval(1)
      setNval(29)
      setCval(25)
      setDval(29)
      setMagicNum(223092870)
      break;
    default:
      break;
  }
}

export default Default