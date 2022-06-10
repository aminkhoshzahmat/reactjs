import React, { Component, useState } from "react";

// export default class ClassVsFunction extends Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     return (
//       <div>
//         {this.state.count}
//         <button
//           onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

/**
 * ham load behtare, ham pardazesh nesbat be class component ha
 * tu babel > try it out compare kon az lahaze size
 *  1- tu class component life cycle ha kameltaran, ama hajme proje bala mibaran
 *  2- npm run build > hajmo moghayese konid
 */
export default function ClassVsFunction() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
