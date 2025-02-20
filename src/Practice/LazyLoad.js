import React, { useContext } from "react";
import { LoginStatus } from "../App";

const LazyLoad = () => {
  const [show, setShow] = useContext(LoginStatus);
  return (
    <div>
      <h1>Lazily Loaded Component</h1>
      <p>Show State:{show ? "True" : "False"}</p>
      <button onClick={() => setShow(!show)}>Toggle Show</button>
    </div>
  );
};

export default LazyLoad;
