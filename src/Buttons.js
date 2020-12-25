import React from "react";

const STOPPED = Symbol(),
  RUNNING = Symbol();
export { STOPPED, RUNNING };

export default ({ args, appState, setAppState }) => {
  const action = (args) => {
    setAppState(RUNNING);
  };

  const stopAction = () => {
    setAppState(STOPPED);
  };

  return (
    <div className="row">
      <div className="column">
        <input
          type="button"
          value="Submit"
          disabled={appState !== STOPPED}
          onClick={() => action(args)}
        ></input>
      </div>
      <div className="column">
        <input
          type="button"
          value="STOP!"
          disabled={appState !== RUNNING}
          onClick={() => stopAction()}
        ></input>
      </div>
    </div>
  );
};
