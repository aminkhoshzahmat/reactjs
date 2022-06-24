import React, { useState } from "react";

/**
 * custom hook ba "use" shoru mishe va mishe tu top level proje sedash zad
 */
function useField(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

// har moghe ke man daram state update mikonam, va vabaste be state ghabli hast, hatmane hatman callback bezanid, vase async budan
// masalan khdoesho begir + 1 kon, ya khdoehso begir naghiz kon ba !

/**
 * kheily codetun tamiz mikone
 */
export default function CustomHook() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const username = useField("");
  const password = useField("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          {...username}
          //   value={username}
          //   onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          {...password}
          //   value={username}
          //   onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
