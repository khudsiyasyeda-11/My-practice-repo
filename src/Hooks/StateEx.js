import axios from "axios";
import React, { useEffect, useState } from "react";

const StateEx = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("err"));
  });
  return (
    <div className="container p-5 text-center text-bg-dark">
      <h1>Students: {users.length}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td key={index}>{user.name}</td>
                <td key={index}>{user.status}</td>
                <td key={index}>{user.course}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StateEx;
