import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import flora from "./assets/special.occasion.jpg";

const Products = () => {
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => setFlower(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container p-5 text-center">
      <h1>Flowers Details</h1>
      <div className="row">
        {flower.map((flow, index) => {
          return (
            <div className="col-lg-4 col-md-6 mb-3" key={index}>
              <div className="card">
                <img
                  src={flora}
                  className="card-img-top w-50 m-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{flow.name}</h5>
                  <h6>{flow.flowers_capacity}</h6>
                  <NavLink
                    to={`/oneprod/${flow.id}`}
                    className="btn btn-primary"
                  >
                    Know More
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
