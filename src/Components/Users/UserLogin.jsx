import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserLogin = () => {
  // fetch users login
  let [userData, setUserData] = useState([]);

  let navigate = useNavigate();

  let fetchApi = async () => {
    try {
      let resp = await axios.get("http://localhost:4000/users");
      setUserData(resp.data);
    } catch (error) {
      toast.error("falid to fetch");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // it is an array
  let allUsersEmail = userData.map((elem) => elem.email);
  // console.log(allUsersEmail)

  //
  let [formData, setFormData] = useState({ emailField: "", passwordField: "" });
  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    // console.log(key,val)
    setFormData({
      ...formData,
      [key]: val,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    let { emailField, passwordField } = formData;

    let emailIndex = allUsersEmail.indexOf(emailField);
    if (emailIndex !== -1) {
      let userPassword = userData[emailIndex].password;
      if (passwordField === userPassword) {
        toast.success("Login sucess");
        navigate("/usersportal");
      } else {
        toast.error("Invalid Password");
      }
    } else {
      toast.error("Invalid email");
    }
  };
  return (
    <>
      <div className="uesrs-login">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email addres"
            onChange={handleInput}
            name="emailField"
            value={formData.emailField}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={handleInput}
            name="passwordField"
            value={formData.passwordField}
            required
          />
          <button>Users Login</button>
          <div className="create-acc" style={{textAlign:"center" }}>
            <NavLink to="/createaccount">create account </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
