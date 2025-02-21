//UNCONTROLLED FORMS will directly take value ref from real DOM using UseRef and that ref is put in input fields to get references of values
import React, { useRef } from "react";

const ControlUncontrol = () => {
  const InputRef = useRef("");
  const SubmitHandle = (e) => {
    e.preventDefault();
    alert(InputRef.current.value);
  };
  return (
    <div>
      <form onSubmit={SubmitHandle}>
        <input type="text" placeholder="Enter Name" ref={InputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlUncontrol;

//CONTROLLED FORMS will have value,onchange and onsubmit too methods with UseState to initialise inputs
