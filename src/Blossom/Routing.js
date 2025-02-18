import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Hero";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Contact from "./Contact";
import NotFoundPage from "./assets/NotFoundPage";
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";
import EditProduct from "./Admin/EditProduct";
import OneProduct from "./OneProduct";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/service" Component={Services} />
      <Route path="/products" Component={Products} />
      <Route path="/contact" Component={Contact} />
      <Route path="/*" Component={NotFoundPage} />
      <Route path="/admin" Component={Login} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/editproduct/:id" Component={EditProduct} />
      <Route path="/oneprod/:id" Component={OneProduct} />
    </Routes>
  );
};

export default Routing;
