import React from "react";
function Parent() {
  const message = "Hello from Parent";
  return <ParentChild message={message} />;
}
function ParentChild({ message }) {
  return <p>{message}</p>;
}

export default Parent;
