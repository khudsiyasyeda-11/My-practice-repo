import React, { useCallback, useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("white");
  const changeColor = useCallback((newColor) => {
    setColor(newColor);
  }, []);
  return (
    <div>
      <h1 style={{ backgroundColor: color }}>
        This is my Original Color : {color}
      </h1>
      <button onClick={() => changeColor("Blue")}>Blue </button>
      <button onClick={() => changeColor("Green")}>Green</button>
      <button onClick={() => changeColor("Orange")}>Orange</button>
    </div>
  );
};

export default ColorChanger;
