// import { Home } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import VeiwMore from "../Pages/VeiwMore";
import PageNotFound from "../Pages/PageNotFound";
import Cart from "./Cart";

const UsersPortal = () => {
  return (
   <>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<VeiwMore/>} path="/veiwmore/:id"/>
        <Route element={<Cart/>} path="/cart"/>
        <Route element={<PageNotFound />} path='/*' />
      </Routes>
      <Footer/> 
    </>
  );
};

export default UsersPortal;
