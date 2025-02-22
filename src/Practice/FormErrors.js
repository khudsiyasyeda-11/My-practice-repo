import React, { useState } from "react";

const FormErrors = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const Validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is Required";
    if (!email) errors.email = "Invalid Email Address";
    return errors;
  };
  const HandleChange = (e) => {
    e.preventDefault();
    const formErrors = Validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Submitted", { name, email });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <form onSubmit={HandleChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        {errors.name && <div>{errors.name}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {errors.email && <div>{errors.email}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormErrors;
