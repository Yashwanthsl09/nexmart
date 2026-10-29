import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import NavBar from "../NavBar";
import VeiwMore from "../Pages/VeiwMore";
import Footer from "../Footer";
import AddProducts from "../Pages/AddProducts";
import UserRegesritationForm from "./UserRegesritationForm";
import RegisteredUsers from "./RegisteredUsers";
import PageNotFound from "../Pages/PageNotFound";

const AdminPortal = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<Products />} path="/products" />
        <Route element={<VeiwMore />} path="/veiwmore/:id" />
        <Route element={<AddProducts />} path="/addproducts" />
        <Route element={<UserRegesritationForm />} path="/register" />
        <Route element={<RegisteredUsers />} path="/usersdetails" />
        <Route element={<PageNotFound />} path='/*' />
      </Routes>
      <Footer />
    </>
  );
};

export default AdminPortal;
