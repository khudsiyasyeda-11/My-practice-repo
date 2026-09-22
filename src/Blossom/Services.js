import React, { useEffect, useState } from "react";
import OneService from "./OneService";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container p-5">
      <h1 className="text-center"> Our Services</h1>
      <p className="text-center">
        “At Blossom Florists, we are dedicated to providing exceptional floral
        arrangements and reliable services. Whether you need a stunning bouquet
        for a special occasion, want to subscribe to regular flower deliveries,
        or require personalized floral design, we are here to make your floral
        experience extraordinary.”
      </p>
      <div className="container row ">
        {services.map((service) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-3">
              <OneService data={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
