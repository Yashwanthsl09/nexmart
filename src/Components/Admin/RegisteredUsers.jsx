import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const RegisteredUsers = () => {
  let [userData, setUserData] = useState([]);

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

  // delete

  let handleDelete = async (id, name) => {
    try {
      let bool = window.confirm(`do you want to delete this ${name} details`);

      if (bool) {
        await axios.delete(`http://localhost:4000/users/${id}`);
        toast.success(`${name} data is deleted`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.warn(`user not detailed `);
      }
    } catch (error) {
      toast.warn("user details is not deleted");
    }
  };

  let navigate=useNavigate()

  return (
    <>
      <div className="register">
        <h1>REGISTERED USERS</h1>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>slno</th>
                <th>UserName</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date of Birth</th>
                <th>Place</th>
                <th>Age</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((elem, index) => {
                let { id, username, contact, email, password, dob, place } =
                  elem;
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{username}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                    <td onClick={() => alert(`password : ${password}`)}>
                      {password}
                    </td>
                    <td>{dob}</td>
                    <td>{place}</td>
                    <td>{new Date().getFullYear() - dob.slice(0, 4)}</td>
                    <td onClick={() => handleDelete(id, username)}>
                      <DeleteIcon />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="back">
         <p onClick={()=>navigate("/adminportal/register")}> <ArrowBackIcon /> Back</p>
        </div>
      </div>
    </>
  );
};

export default RegisteredUsers;
