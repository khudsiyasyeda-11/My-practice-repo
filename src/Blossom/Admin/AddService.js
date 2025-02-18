import axios from "axios";
import React, { useState } from "react";

const AddService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const AddService = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/services", { name, description })
      .then(() => {
        setName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="shadow p-3 m-auto text-center">
        <h1>Add Services</h1>
        <form onSubmit={AddService} className="m-auto">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Service Name"
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-3"
          />
          <textarea
            cols={30}
            rows={8}
            type="text"
            name="description"
            value={description}
            placeholder="Service Description"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control mb-3"
          />
          <input
            type="submit"
            className="btn btn-sm btn-secondary text-center"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
