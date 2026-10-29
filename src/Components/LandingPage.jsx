import React, { useState } from "react";
import AdminLogin from "./Admin/AdminLogin";
import UserLogin from "./Users/UserLogin";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  let [bool, setBool] = useState(true);

  let handleBool = () => {
    setBool(!bool);
  };

  //

  return (
    <div>
      <div className="landing-page">
        <div className="container">
          <div className="btnbox">
            <button onClick={handleBool} className={bool ? "" : "ryt"}>
              {bool ? "USER" : "ADMIN"}
            </button>
          </div>
          <div className="formbox">
            {bool ? <UserLogin /> : <AdminLogin />}

            {/* // forgot password */}

            <div className="forget">
              <Link>Forget Password</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
