import axios from "axios";
import React, { useState } from "react";

const CreateData = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const AddService = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/services", { name, description })
      .then(() => {
        alert("New Service Added");
        setName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5">
      <h1 className="text-center">Add Services</h1>
      <div className="col-lg-6">
        <div className="shadow p-3 mx-auto">
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
    </div>
  );
};

export default CreateData;
