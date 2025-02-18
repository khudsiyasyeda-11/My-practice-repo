import React, { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

const CustomHook = () => {
  const width = useWindowWidth();
  return <div>Window width :{width}px</div>;
};

export default CustomHook;
