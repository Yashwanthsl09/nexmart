import React from "react";
import LandingPage from "./Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPortal from "./Components/Admin/AdminPortal";
import UsersPortal from "./Components/Users/UsersPortal";
import PageNotFound from "./Components/Pages/PageNotFound";
import CreateAccount from "./Components/Users/CreateAccount";

const App = () => {
  return (
    <>
      {/* // here we need to create the path for the component */}
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<AdminPortal />} path="/adminportal/*" />
        <Route element={<UsersPortal />} path="/usersportal/*" />
        <Route element={<CreateAccount />} path="/createaccount" />

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </>
  );
};

export default App;
