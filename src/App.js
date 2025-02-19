import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "animate.css";
import { createContext, useState } from "react";
import "react-toastify";
import Pure from "./Practice/Pure";
// import ParentChild from "./Practice/ParentChild";
// import Force from "./Practice/Force";
// import ClassComponents from "./Practice/ClassComponents";
// import CustomHook from "./Practice/CustomHook";
// import Header from "./Blossom/Header";
// import Footer from "./Blossom/Footer";
// import Routing from "./Blossom/Routing";
// import Example from "./Practice/Example";
// import Cleanup from "./Practice/Cleanup";
// import Counter from "./Practice/Counter";
// import ColorChanger from "./Practice/ColorChanger";
export const LoginStatus = createContext();
function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <LoginStatus.Provider value={[login, setLogin]}>
        {/* <Header />
        <Routing />
        <Footer /> */}
        <Pure />
      </LoginStatus.Provider>
    </div>
  );
}

export default App;
