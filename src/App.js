import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "animate.css";
import { createContext, useState } from "react";
import "react-toastify";
// import Pure from "./Practice/Pure";
import ReactMemo from "./Practice/ReactMemo";
// import Header from "./Blossom/Header";
// import Footer from "./Blossom/Footer";
// import Routing from "./Blossom/Routing";
export const LoginStatus = createContext();
function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <LoginStatus.Provider value={[login, setLogin]}>
        {/* <Header />
        <Routing />
        <Footer /> */}
        <ReactMemo />
      </LoginStatus.Provider>
    </div>
  );
}

export default App;
