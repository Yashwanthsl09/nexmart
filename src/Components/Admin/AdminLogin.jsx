import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  let navigate = useNavigate();

  let [formData, setFormData] = useState({ email: "", password: "" });

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setFormData({
      ...formData,
      [key]: val,
    });

    // console.log(key, val);
  };

  let handleSubmit = (e) => {
    let { email, password } = formData;

    let errorBorder = `border:solid 2px red;color:red;background:white`;
    let sucessBroder = `border:solid 2px green;color:red;background:white`;

    e.preventDefault();
    console.log(formData);
    // credenetails acting like database

    let credentails = {
      adminEmail: "admin@gmail.com",
      adminPwd: "Admin123",
    };

    let { adminEmail, adminPwd } = credentails;

    // checking the email and password entered

    if (email === adminEmail) {
      // e.target[0].style.cssText = sucessBroder;
      //
      //if email correct then only check the password

      if (password === adminPwd) {
        // e.target[1].style.cssText = sucessBroder;

        toast.success("Login Sucess...");

        navigate("/adminportal");
      } else {
        // console.error("Invalid Password");
        toast.error("Passwrod is invalid");
        // e.target[1].style.cssText = errorBorder;
      }
    } else {
      // console.error("Invalid email");
      toast.error("Email is invalid");
      //
      // if we want to display the error on broder
      // e.target[0].style.cssText = errorBorder;
    }
  };

  return (
    <>
      <div className="admin-login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email addres"
            onChange={handleInput}
            name="email"
          />

          <input
            type="password"
            placeholder="Enter password"
            onChange={handleInput}
            name="password"
          />
          <button>Admin Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
