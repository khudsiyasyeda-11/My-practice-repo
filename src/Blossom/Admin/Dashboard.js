import React, { useContext, useMemo, useState } from "react";
import Welcome from "./Welcome";
import AddService from "./AddService";
import ViewService from "./ViewService";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import ViewEnquiries from "./ViewEnquiries";
import { LoginStatus } from "../../App";
import Login from "./Login";

const Dashboard = () => {
  const [view, setView] = useState("");
  const [login, setLogin] = useContext(LoginStatus);
  const DashboardView = useMemo(() => {
    if (view === "addser") {
      return <AddService />;
    } else if (view === "viewser") {
      return <ViewService />;
    } else if (view === "addprod") {
      return <AddProduct />;
    } else if (view === "viewprod") {
      return <ViewProduct />;
    } else if (view === "viewenq") {
      return <ViewEnquiries />;
    } else {
      return <Welcome />;
    }
  }, [view]);
  if (login) {
    return (
      <div>
        <div className="row">
          <aside className="col-lg-3">
            <h2 onClick={() => setView("dashboard")}>Admin Dashboard</h2>
            <button onClick={() => setView("addser")}>Add Service</button>
            <button onClick={() => setView("viewser")}>View Service</button>
            <button onClick={() => setView("addprod")}>Add Products</button>
            <button onClick={() => setView("viewprod")}>View Products</button>
            <button onClick={() => setView("viewenq")}>View Enquiries</button>
            <button onClick={() => setLogin(false)}>LogOut</button>
          </aside>
          <div className="col-lg-9">{DashboardView}</div>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Dashboard;
