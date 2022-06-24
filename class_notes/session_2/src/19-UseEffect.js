import React, { useEffect, useState } from "react";

/**
 * search: React 18 doens't show memory leak warning
 * npm i react@17 react-dom@17> downgrade
 *
 * fetch az concept signal estefade mikone.
 */
export default function App() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? "UnMount" : "Mount"}
      </button>
      {mount && <UseEffect />}
    </div>
  );
}

/**
 * shabih sazi life cycle ha ba useEffect
 * mesle component did mount hast.
 */
function UseEffect() {
  const [counter, setCounter] = useState(0);

  console.log(1);

  /**
   * age taghir kone mojadad component ejra mishe
   * cDM, cDU (component did mount, component did update) ba ham anjam mide
   *
   */

  // in ye clousere > memorize kardan yeseri varaible, vase hamine ke betune be state ghabli dastresi dashte bashe,
  // sare hamine ke clean up be meghdare ghabli dastresi dashte bashe
  useEffect(() => {
    console.log("Component did mount");

    setTimeout(() => {
      setCounter(counter + 5);
    }, 2000);

    /**
     * ghabl az inke useEffect ejra beshe clean up effect ghabli run mishe > clean up effect ghabli run mishe
     * tasir effect ghabliro clean kone
     * dar ezaye useEffect jadid
     */
    return () => {
      console.log("callback2 (unmount)", counter);
      // clearTimeout(timerId)
    };
  }, [counter]); // age dependency nadashte bshim mishe cDM, age bashe cDU

  //   console.log(2);

  /**
   * cWUM > behesh clean up ham migan
   * use effect ye callback migire, ba list dependency ha
   * chetori mishe be component will unmount tabdilesh kard?
   * useEffect mitune ye call back dgeo return kone > callback dovom mishe ye will unmount,
   * ba ye dependency khali.
   */
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []); // age dependency nadid, yani kolan ,[] nabashe, hich farghi ba i nadare ke engar code to top level code hast
  // amalan engari useEffect vojud nadare, faghat bade mount ejra mishe
  // gush eb zange taghire, che props, state, variable,...

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const controller = new AbortController(); // vase khode JS hast
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { signal })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return <div>Counter: {counter}</div>;
}
