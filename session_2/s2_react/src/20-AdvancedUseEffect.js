import React, { useState, useEffect } from "react";

/**
 * bahse inke chera tu file 19, naraftim soraghe setInterval
 *
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export default function AdvancedUseEffect() {
  const [counter, setCounter] = useState(0);

  /**
   * ma mikhaym faghat ye interval dashte bashim, na inke modam yedune besaze
   */
  useEffect(() => {
    const id = setInterval(() => {
      console.log("In interval", counter); // inja chon counter use shode, garbage collector nemiad soragesh, ama age nabud miumad pakesh miumad
      setCounter(counter + 1);
    }, 1000);

    console.log("Mount", id, counter);

    // na, bedard nemikhore, khob in dare hey interval misaze o pak mikone
    // return () => {
    //   clearInterval(id);
    // };
    //   }, [counter]);
  }, []);

  return <div>counter: {counter}</div>;
}
