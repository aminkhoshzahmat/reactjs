import React, { useState } from "react";

/**
 * chetor mesle pureComponent ha biaym jelo render shodan child component
 * haro begirim?
 * bejash az Memo estafade miknim, component memorize mikone
 */
export default function Memo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter1((s) => s + 1)}>
        Change counter 1
      </button>
      <button onClick={() => setCounter2((s) => s + 1)}>
        Change counter 2
      </button>
      <div>Counter: {counter1}</div>
      <div> Counter: {counter2}</div>

      <ComponentOne counter1={counter1} />
      <ComponentTwo counter2={counter2} />
    </div>
  );
}

function ComponentOne({ counter1 }) {
  console.log("ComponentOne", counter1);
  return <div>one: {counter1}</div>;
}

const ComponentTwo = React.memo(function ({ counter2 }) {
  console.log("ComponentTwo", counter2);
  return <div>two: {counter2}</div>;
});
