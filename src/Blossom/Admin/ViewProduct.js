import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });
  const DeleteProduct = (pid) => {
    axios
      .delete(`http://localhost:4000/products/${pid}`)
      .then(() => {
        alert("Deleted... Sucessfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-5 container text-center">
      <h1>View Products</h1>
      <table className="table table-bordered p-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Flowers Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map((prod, index) => {
          return (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.flowers_capacity}</td>
              <td>
                <NavLink to={`/editproduct/${prod.id}`}>
                  <button className="btn btn-sm btn-info">
                    <i className="bi bi-pencil"></i>
                  </button>
                </NavLink>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => DeleteProduct(prod.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ViewProduct;
