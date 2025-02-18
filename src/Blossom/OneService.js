import React from "react";
import flower from "./assets/custom.jpg";

const OneService = (props) => {
  return (
    <div className="container p-3">
      <div className="card">
        <div className="card-body">
          <img src={flower} alt="" className="w-100" />
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.description}</p>
          <button className="btn btn-dark">Know more</button>
        </div>
      </div>
      {/* <div className="container p-3 text-bg-info">
        <ol>
          {props.data.highlights.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div> */}
    </div>
  );
};

export default OneService;
