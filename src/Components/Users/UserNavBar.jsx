
import React from "react";
import { NavLink } from "react-router-dom";

const UserNavBar = () => {


  return (
    <div className="">
      <ul>
        <li>
          <NavLink to="/usersportal/">HOME</NavLink>
        </li>

        <li>
          <NavLink to="/usersportal/products">PRODUCTS</NavLink>
        </li>

        <li>
          <NavLink to="/usersportal/cart">CART</NavLink>
        </li>

        <li>
          <NavLink to="/">LOGOUT</NavLink>
        </li>


      </ul>
    </div>
  );
};

export default UserNavBar;
