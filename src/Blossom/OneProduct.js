import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SendEnquiry from "./SendEnquiry";

const OneProduct = () => {
  const { id } = useParams();
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => setFlower(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container p-5 text-center">
      <div className="row">
        <div className="col-lg-6 shadow p-5 m-auto lily">
          <h1> {flower.name}</h1>
          <p>{flower.description}</p>
          <h6>{flower.price}</h6>
          <p>{flower.flowers_capacity}</p>
        </div>
        <div className="col-lg-6 p-5 m-auto  ">
          <SendEnquiry />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
