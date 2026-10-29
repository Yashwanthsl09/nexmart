import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserRegesritationForm = () => {
  // to check that email is exist or not
  // fetching the api

  let [userData, setUserData] = useState([]);
  let navigate=useNavigate()

  let errMsg = useRef("");

  let fetchApi = async () => {
    let usersApi = await axios.get("http://localhost:4000/users");

    setUserData(usersApi.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //checking

  let allusersEmail = userData.map((elem) => elem.email);
  console.log(allusersEmail);

  let [users, setUsers] = useState({
    id: "",
    username: "",
    contact: "",
    email: "",
    password: "",
    dob: "",
    place: "",
  });

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    // console.log(key, val);
    setUsers({
      ...users,
      [key]: val,
    });
  };

  // adding the user to the potal
  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let emailInput = users.email;
      let bool = allusersEmail.includes(emailInput);
      if (bool) {
        let err = "Email is already exist ";
        toast.error(err);
        errMsg.current.innerText = err;
        e.target[2].style.border = "solid 2px red";
      } else {
        errMsg.current.innerText = "";
        e.target[2].style.border = "none";
        await axios.post("http://localhost:4000/users", users);
        toast.success("User is registered");
        setUsers({
          id: "",
          username: "",
          contact: "",
          email: "",
          password: "",
          dob: "",
          place: "",
        });
        navigate()
      }
    } catch (error) {
      toast.error(`user is not registred : ${error}`);
    }
  };

  return (
    <>
      <div className="registers">
        <h1>REGISTERATION FORM</h1>
        <button onClick={()=>navigate(`/adminportal/usersdetails`)} >REGISTERED USERS</button>
        <div className="containeer">
          <form action="" onSubmit={handleSubmit}>
            <label>
              UserName :
              <input
                type="text"
                placeholder="Enter the Username"
                onChange={handleInput}
                name="username"
                value={users.username}
                required
              />
            </label>
            <label>
              Contact :
              <input
                type="tel"
                placeholder="Enter mobile number"
                onChange={handleInput}
                name="contact"
                value={users.contact}
                required
              />
            </label>
            <label>
              Email :
              <input
                type="email"
                placeholder="Enter Email"
                onChange={handleInput}
                name="email"
                value={users.email}
                required
              />
            </label>
            <div
              ref={errMsg}
              style={{ color: "red", textAlign: "right" }}
            ></div>
            <label>
              Password :
              <input type="password" onChange={handleInput} required />
            </label>
            <label>
              Date of Birth
              <input
                type="date"
                placeholder="Enter DoB"
                onChange={handleInput}
                name="dob"
                value={users.dob}
                required
              />
            </label>
            <label>
              Place :
              <input
                type="text"
                placeholder="Enter Place"
                onChange={handleInput}
                name="place"
                value={users.place}
                required
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserRegesritationForm;
