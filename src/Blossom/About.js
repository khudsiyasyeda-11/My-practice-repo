import React from "react";

const About = () => {
  return (
    <div className="container p-5  ">
      <h3 className="text-secondary text-center">
        “Our Story - Passion for Flowers, Dedication to Service”
      </h3>
      <p className="found">
        “Blossom Florists was founded with a simple mission - to create
        beautiful floral arrangements that bring smiles and joy to every
        customer. We've been serving the community for over 10 years, carefully
        sourcing the finest flowers and using eco-friendly practices to ensure
        every bouquet is fresh, vibrant, and sustainably crafted.”
      </p>
      <div className="container value shadow p-3">
        <h6>Our Values</h6>
        <ul>
          <li>Quality: Only the freshest, most beautiful flowers.</li>
          <li>
            Sustainability: Commitment to eco-friendly sourcing and packaging
          </li>
          <li>
            Customer Service: Always available to help with your floral needs.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
