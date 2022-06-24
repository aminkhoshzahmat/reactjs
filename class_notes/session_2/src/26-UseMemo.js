import React, { useEffect, useState, useMemo } from "react";

const data = [
  { id: 1, title: "1", parentId: null },
  { id: 2, title: "2", parentId: 1 },
  { id: 3, title: "3", parentId: 1 },
  { id: 4, title: "4", parentId: 2 },
  { id: 5, title: "5", parentId: 2 },
  { id: 6, title: "6", parentId: 3 },
];

const treeData = [
  {
    id: 1,
    title: "1",
    children: [
      {
        id: 2,
        title: "2",
        children: [
          { id: 4, title: "4" },
          { id: 5, title: "5" },
        ],
      },
      { id: 3, title: "3", children: [{ id: 6, title: "6" }] },
    ],
  },
];

export default function Parent() {
  const [mount, setMount] = useState(false);

  return (
    <div>
      <button onClick={() => setMount((s) => !s)}>
        {mount ? "unmount" : "Mount"}
      </button>
      {mount && <Child />}
    </div>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((s) => s + 1);
    }, 1000);
  }, []);

  /**
   * jai ke pardazesh sangin darim va mikhad render kond nashe,
   * hat steInterval ham kheily kond mishe, har sanie mishe 10 sanie.
   * useMemo bedard inja mikhore, faghat vase pardazesh sangin nist
   *    age mikhay memorize koni me meghdario
   */
  function heavyProcess() {
    console.log("heavy");
    return (99999999999n ** 999999n).toString();
  }

  const value = useMemo(() => {
    return heavyProcess();
  }, []);

  //   const value = heavyProcess();

  return (
    <div>
      Count: {count}
      <hr />
      value: {value}
    </div>
  );
}
