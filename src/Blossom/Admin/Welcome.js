import React from "react";
import logo from "../assets/logo.png";
import useFetchAPIdata from "./FetchAPI";

const Welcome = () => {
  const services = useFetchAPIdata(`http://localhost:4000/services`);
  const products = useFetchAPIdata(`http://localhost:4000/products`);
  const enquiries = useFetchAPIdata(`http://localhost:4000/enquiries`);
  return (
    <div>
      <div className="row p-2 ">
        <div className="col-lg-4 shadow p-5">
          <h1>{services.length}+</h1>
          <h4>Services</h4>
        </div>
        <div className="col-lg-4 shadow p-5">
          <h1>{products.length}+</h1>
          <h4>Products</h4>
        </div>
        <div className="col-lg-4 shadow p-5">
          <h1>{enquiries.length}+</h1>
          <h4>Enquiries</h4>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mb-5 my-5">
        Welcome to Admin Dashboard
      </h1>
      <img src={logo} alt="" className="w-75" />
    </div>
  );
};

export default Welcome;
