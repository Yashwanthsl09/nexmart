import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const CreateAccount = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const errMsg = useRef(null);

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      setUserData(response.data);
    } catch (error) {
      toast.error("Unable to load users");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [users, setUsers] = useState({
    username: "",
    contact: "",
    email: "",
    password: "",
    dob: "",
    place: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailExists = userData.some(
        (user) =>
          user.email?.trim().toLowerCase() === users.email.trim().toLowerCase(),
      );

      if (emailExists) {
        toast.error("Email already exists");

        if (errMsg.current) {
          errMsg.current.innerText = "This email is already registered";
        }
        return;
      }

      if (errMsg.current) {
        errMsg.current.innerText = "";
      }

      await axios.post("http://localhost:4000/users", users);

      toast.success("Account created successfully!");

      setUsers({
        username: "",
        contact: "",
        email: "",
        password: "",
        dob: "",
        place: "",
      });

      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="create-account">
      <div className="account-card">
        <div className="account-heading">
          <div className="account-icon">✦</div>
          <h2>Create Account</h2>
          <p>Join us today and get started!</p>
        </div>

        <form onSubmit={handleSubmit} className="account-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={handleInput}
              name="username"
              value={users.username}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              id="contact"
              type="tel"
              placeholder="Enter mobile number"
              onChange={handleInput}
              name="contact"
              value={users.contact}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleInput}
              name="email"
              value={users.email}
              required
            />
            <div ref={errMsg} className="account-error"></div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              onChange={handleInput}
              name="password"
              value={users.password}
              minLength={6}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              type="date"
              onChange={handleInput}
              name="dob"
              value={users.dob}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="place">City / Place</label>
            <input
              id="place"
              type="text"
              placeholder="Enter your city"
              onChange={handleInput}
              name="place"
              value={users.place}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Create My Account <span>→</span>
          </button>

          <p className="account-footer">
            Already have an account?{" "}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
