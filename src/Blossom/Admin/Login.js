import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStatus } from "../../App";

const Login = () => {
  const [credentials, setCredentials] = useState("");
  const navigate = useNavigate("");
  const [login, setLogin] = useContext(LoginStatus);
  const UpdateDetails = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(credentials);
    const { username, password } = credentials;
    if (username === "admin" && password === "open1234") {
      setLogin(true);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="container p-5 ">
      <div className="container col-lg-6 shadow font-bold mx-auto">
        <h2 className="text-center">Admin Login</h2>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control mb-3 m-auto"
            onChange={UpdateDetails}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control mb-3 m-auto"
            onChange={UpdateDetails}
          />
          <input type="submit" className="btn btn-success mb-3 text-center" />
        </form>
      </div>
    </div>
  );
};

export default Login;
