//saya mau passing counter kepada sebuah display

import React, { useState } from "react";
import Counter from "./counter";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <h1>counter : {counter}</h1>
//       <button
//         onClick={() =>
//           setCounter((current) => {
//             return current + 1;
//           })
//         }
//       >
//         add
//       </button>
//     </>
//   );
// }

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);
  const listCounterComponent = counters.map((item) => {
    return (
      <Counter
        key={item.id}
        id={item.id}
        value={item.value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
  });

  function onIncrement(id) {
    console.log("sudah berhasil untuk Increment");
    const temp = [...counters];
    const index = temp.findIndex((p) => p.id === id);
    temp[index].value++;

    setCounters(temp);
  }
  function onDecrement(id) {
    console.log("sudah berhasil untuk Decrement");
    const temp = [...counters];
    const index = temp.findIndex((p) => p.id === id);
    temp[index].value--;

    setCounters(temp);
  }
  function onReset() {
    console.log("sudah berhasil untuk Reset");
    reload();
  }
  return (
    <>
      <button>Reset</button>
      {listCounterComponent}
    </>
  );
}

export default App;
