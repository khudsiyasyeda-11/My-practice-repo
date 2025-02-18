import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [flowers_capacity, setFlowers_capacity] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setFlowers_capacity(res.data.flowers_capacity);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const FlowerSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/products/${id}`, {
        id,
        name,
        description,
        price,
        flowers_capacity,
      })
      .then(() => {
        navigate("/dashboard");
        setName("");
        setDescription("");
        setPrice("");
        setFlowers_capacity("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 text-center ">
      <h1>Edit Product </h1>
      <div className=" col container p-5 shadow m-auto">
        <form onSubmit={FlowerSubmit}>
          <input
            placeholder="Product Name"
            className="form-control mb-3"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Product Description"
            className="form-control mb-3"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Product Price"
            className="form-control mb-3"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="Product Capacity"
            className="form-control mb-3"
            name="flowers_capacity"
            value={flowers_capacity}
            onChange={(e) => setFlowers_capacity(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
