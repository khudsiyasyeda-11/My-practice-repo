import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "animate.css";
// import React, { Suspense } from "react";
import React from "react";
import { createContext, useState } from "react";
import "react-toastify";
// import Header from "./Blossom/Header";
// import Footer from "./Blossom/Footer";
// import Routing from "./Blossom/Routing";
export const LoginStatus = createContext();
export const Lazy = React.lazy(() => import("./Practice/LazyLoad"));
function App() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div>
      <LoginStatus.Provider value={[login, setLogin, show, setShow]}>
        {/* <Header />
        <Routing />
        <Footer /> */}
        {/* <Suspense fallback={<div>...Loading</div>}>
          <Lazy show={show} setShow={setShow} />
        </Suspense> */}
      </LoginStatus.Provider>
    </div>
  );
}

export default App;
