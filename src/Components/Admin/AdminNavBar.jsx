import React from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/",{replace:true});
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/adminportal/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/adminportal/products">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/adminportal/addproducts">ADD PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/adminportal/register">USER REGISTRATION</NavLink>
        </li>
        <li>
          <a onClick={handleLogout}>LOGOUT</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavBar;
