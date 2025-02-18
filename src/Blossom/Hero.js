import React from "react";
import floral from "./assets/home.1.jpeg";
import flora from "./assets/home.2.webp";
import flor from "./assets/home.3.webp";

const Home = () => {
  return (
    <div className="container-fluid p-2">
      <div className="container p-5">
        <h1 className="text-center">
          “Bring Joy to Every Occasion with Fresh, Beautiful Blooms”
        </h1>
        <h4 className="text-center">
          “Explore our wide selection of hand-picked flower arrangements,
          expertly crafted and delivered right to your door.”
        </h4>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner container ">
          <div className="carousel-item active">
            <img src={floral} className="d-block w-100 flor" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn btn-dark ">Order Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={flora} className="d-block w-100 flor" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={flor} className="d-block w-100 flor" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container p-5 text-center">
        <div className="row cars px-5">
          <h1>
            “Welcome to Blossom Florists – Where Every Stem Tells a Story”
          </h1>
          <p>
            “At Blossom Florists, we specialize in bringing beauty and joy
            through nature’s most delicate gifts – flowers. With a commitment to
            quality, sustainability, and exceptional customer service, we
            provide the finest bouquets and floral arrangements for every
            occasion. Whether you're celebrating a birthday, sending sympathy,
            or simply brightening someone’s day, we’re here to make every moment
            special.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
