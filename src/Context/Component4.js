import React, { useContext } from "react";
import { CounterValue } from "./MainComp";

const Component4 = () => {
  const [count, setCount] = useContext(CounterValue);
  return (
    <div>
      <h1>Component 4</h1>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount(count + 1)}>ADD+</button>
    </div>
  );
};

export default Component4;
