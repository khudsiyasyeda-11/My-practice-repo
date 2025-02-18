import React, { useMemo, useState } from "react";

const MemoEx = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(4);
  const result = useMemo(() => {
    return Mul(number);
  }, [number]);
  return (
    <div className="container p-5 text-center">
      <h2>Use Memo Example</h2>
      <h4>Counter : {count}</h4>
      <button onClick={() => setCount(count + 1)}>Add+</button>
      <h4>Result: {result}</h4>
      <button onClick={() => setNumber(number + 1)}>Add +</button>
    </div>
  );
};
const Mul = (num) => {
  console.log("Function is Executed");
  return num * num;
};

export default MemoEx;
