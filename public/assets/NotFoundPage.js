import React from "react";
import error from "./404.jpg";
const NotFoundPage = () => {
  return (
    <div className="container p-5 text-center">
      <h1>Not Found Page</h1>
      <img src={error} alt="" className="w-100" />
    </div>
  );
};

export default NotFoundPage;
