import React, { useState, useReducer } from "react";

/**
 * action hamun tu ye laye dge modiriate mikonim
 *
 * Search Flox flow,
 * redux khodesh dare flox flow piade sazi mikone.
 */
function reducer(state, action) {}

/**
 * ye rahe dge ineke az reducer estefade konid
 *
 * ama ye  function migire ba 2 parameter, state o action
 *
 */
export default function UseReducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = UseReducer(reducer, 10); // parameter dovom hamun default value
  return (
    <div>
      {state}
      <hr />
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
