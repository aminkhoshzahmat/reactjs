import React, { useRef, useEffect } from "react";

/**
 * hamun createRef hast, ama vase function
 * age mount shode bashe current dare, age na null mishe
 */
export default function UseRef() {
  const myInpurRef = useRef();

  useEffect(() => {
    myInpurRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={myInpurRef} />
    </div>
  );
}
