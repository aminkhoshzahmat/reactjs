import React, { useState } from "react";

/**
 * harbar state ya props update beshe, kole function az aval ejra mishe!!!
 * useState mitune callback begire, karbordesh chie vaghti mishe dasti behesh default value dad?
 *  state niaz be pardazesh dashte bashe
 */
export default function UseState() {
  /**
   * avali meghdare, dovomi function vase set kardan, va mishe meghdare pishfarz behesh dad.
   */
  //   const state = useState(10);
  //   const [state, setState] = useState(() => 10);
  //   const [state, setState] = useState(999999n ** 999999n);
  const [state, setState] = useState(() => 9n ** 99999n); // dar ezaye har render in ebarat mohasebe kone, faghat bare aval inkaro mikone
  const [count, setCount] = useState(5);

  console.log(state);

  return (
    <div>
      Value: {state.toString()}
      <button onClick={() => setState(state + 1n)}>+</button>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

//   return (
//     <div>
//       Value: {state[0]}
//       <button onClick={() => state[1](state[0] + 1)}>+</button>
//     </div>
//   );
// }
