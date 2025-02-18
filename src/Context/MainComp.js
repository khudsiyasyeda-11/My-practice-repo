import React, { createContext, useState } from "react";
import Component1 from "./Component1";
export const CounterValue = createContext();

const MainComp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterValue.Provider value={[count, setCount]}>
        <h1>Main Component</h1>
        <h3>Counter : {count}</h3>
        <button onClick={() => setCount(count + 1)}> ADD+</button>
        <Component1 />
      </CounterValue.Provider>
    </div>
  );
};

export default MainComp;
