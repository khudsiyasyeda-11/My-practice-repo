import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const [flower, setFlower] = useState({});
  const UpdateFlower = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };
  const FlowerHandle = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/products`, flower)
      .then(() => toast("New Product Added"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 text-center">
      <ToastContainer />
      <div className="p-5 col text-center shadow m-auto">
        <form onSubmit={FlowerHandle}>
          <select
            className="form-control mb-3"
            name="name"
            type="text"
            onChange={UpdateFlower}
          >
            <option hidden>Name of the Flowers</option>
            <option>Bright Birthday Blooms</option>
            <option>Colorful Cheerful Arrangement</option>
            <option>Deluxe Happy Birthday Roses</option>
            <option>Luxury Wedding Centerpieces</option>
            <option>Classic Bridal Bouquet</option>
            <option>Serenity Floral Tribute</option>
            <option>Elegant White Lily Arrangement</option>
            <option>Cheerful Sunflower Bouquet</option>
            <option>Bright Healing Blooms</option>
            <option>Romantic Red Roses</option>
            <option>Elegant Pink Peonies</option>
          </select>
          <textarea
            placeholder="Description Of Flowers "
            cols={22}
            rows={6}
            type="text"
            name="description"
            className="form-control mb-3"
            onChange={UpdateFlower}
          />
          <input
            type="text"
            name="price"
            className="form-control mb-3"
            placeholder="Price"
            onChange={UpdateFlower}
          />
          <input
            type="text"
            name="flowers_capacity"
            className="form-control mb-3"
            placeholder="Flowers Capacity"
            onChange={UpdateFlower}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
