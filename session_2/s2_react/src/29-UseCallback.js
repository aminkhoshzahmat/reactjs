import React, { useCallback, useEffect, useState } from "react";

/**
 * methodi ro mikhaym tedad ejrasho, modiridat konim,
 * dar ezaye taghir in dependency ha ejra sho
 * callback ha mesle refrence hastan
 */
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState();

  useEffect(() => {
    setInterval(() => setCount((s) => s + 1), 3000);
  }, []);

  const myInputRef = useCallback((node) => {
    console.log(node);
    node?.focus();
  });

  //   function myInputRef(node) {
  //     console.log(node);
  //     if (node) {
  //       node.focus();
  //     }
  //   }

  const myHeightRef = useCallback((node) => {
    // node && ...
    if (node) {
      console.log(node.getBoundingClientRect());
      setHeight(node.getBoundingClientRect().height.toFixed(2));
    }
  });

  return (
    <div>
      <h2 ref={myHeightRef}>Hello</h2>
      <div>Height: {height}</div>
      <div>count: {count}</div>
      <input ref={myInputRef} />
    </div>
  );
}
