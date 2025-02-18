import React from "react";

export default function Movie(props) {
  return (
    <div className="movie">
      <figure>
        <img src={props.imgRef} alt="" />

        <figcaption>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
        </figcaption>
      </figure>
    </div>
  );
}
