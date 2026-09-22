import React from "react";

const NotFoundPage = () => {
  return (
    <div className="not-found text-center p-5">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <img
        src="/assets/notfound.png"
        alt="Page Not Found"
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
};

export default NotFoundPage;
