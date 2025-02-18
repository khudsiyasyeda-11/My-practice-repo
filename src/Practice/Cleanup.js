import React, { useEffect, useState } from "react";

const Cleanup = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return <div>{seconds} seconds is passed</div>;
};

export default Cleanup;
