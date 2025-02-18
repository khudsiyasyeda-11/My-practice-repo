import axios from "axios";
import React, { useEffect, useState } from "react";

const BasicRead = () => {
  const [services, SetServices] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/services")
      .then((res) => SetServices(res.data))
      .catch((err) => console.log(err));
  });
  const deletService = (sid) => {
    axios
      .delete(`http://localhost:4000/services/${sid}`)
      .then(() => alert("Deleted Sucessfully"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (sid) => {
    axios.get(`http://localhost:4000/services/${sid}`).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setId(res.data.id);
      setDescription(res.data.description);
    });
  };
  const UpdateService = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/services/${id}`, {
        name,
        description,
        id,
      })
      .then(() => {
        alert("Updated Sucessfully...");
        setId("");
        setName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 text-center text-bg-secondary">
      <h1>View Services</h1>
      <table className="table table-bordered p-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((serv) => {
            return (
              <tr>
                <td>{serv.name}</td>
                <td>{serv.description}</td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-sm btn-info"
                    onClick={() => getOneRecord(serv.id)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deletService(serv.id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                EDIT SERVICES
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="w-50 format m-auto" onSubmit={UpdateService}>
                <h2>Update Services</h2>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="name"
                  placeholder="Service Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  type="text"
                  className="form-control mb-3"
                  name="description"
                  placeholder="Service Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="submit"
                  className="form-control-sm btn btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRead;
