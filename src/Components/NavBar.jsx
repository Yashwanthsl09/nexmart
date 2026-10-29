import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AdminNavBar from "./Admin/AdminNavBar";
import UserNavBar from "./Users/UserNavBar";
import logo1 from "../assets/logo1.png";

const NavBar = () => {
  const loc = useLocation();
  let path = loc.pathname;
  let bool = path.startsWith("/adminportal");
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        {/* .logo+.links>ul>li*6>a{items$} */}
        <div className="links">{bool ? <AdminNavBar /> : <UserNavBar />}</div>
      </div>
    </>
  );
};

export default NavBar;
