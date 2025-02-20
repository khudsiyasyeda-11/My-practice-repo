import React, { useState } from "react";

const ReactMemo = React.memo(({ name }) => {
  console.log("Rendering React Memo");

  return <h1>Hello {name}</h1>;
});

function App() {
  const [name, setName] = useState("Zoha");
  const [count, setCount] = useState(0);

  return (
    <div>
      <ReactMemo name={name} />
      <button onClick={() => setName("Burhan")}>Click Me</button>

      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
