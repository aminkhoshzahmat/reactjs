import React, { useState, useEffect } from "react";

/**
 * react hook haro bar asase tartibeshun mibare tu ye array vase hook zakhire mikone,
 * esm haro melak nemizare [name, setName]
 * tartib moheme, va inke top level bashe
 *
 * in error haro create-react-app ke mide, tu config haye webpack hast.
 */
export default function HooksRules() {
  const [count, setCount] = useState(0);

  /**
   * React Hook "useState" is called conditionally.
   *  React Hooks must be called in the exact same order
   *  in every component render  react-hooks/rules-of-hooks
   */
  //   if (count % 2) {
  //     const [name, setName] = useState("");
  //   }

  // ya hata tu useEffect biayd ye hook dge bezanid, khata mide, chon order sharti mishe, har hooki

  //   useEffect(() => {
  //     const [state, setState] = useState(0);
  //   }, []);

  //   function func() {
  //     const [name, setName] = useState(0);
  //   }

  /**
   * React Hook "useState" may be executed more than once.
   *  Possibly because it is called in a loop. React Hooks must
   *  be called in the exact same order in every component render
   */

  //   for (let i = 0; i < 5; i++) {
  //     const [name, setName] = useState(0);
  //   }

  return <div>Count : {count}</div>;
}
