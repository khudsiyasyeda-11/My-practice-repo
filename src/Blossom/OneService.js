import React from "react";

const OneService = (props) => {
  return (
    <div className="container p-3">
      <div className="card serve">
        <div className="card-body">
          <img
            src={process.env.PUBLIC_URL + "/" + props.data.service_image}
            alt=""
            className="w-100"
          />
          <h5 className="card-title m-1">{props.data.name}</h5>
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
