import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h4 from "../../assets/h4.jpg";
import h5 from "../../assets/h5.jpg";
import h6 from "../../assets/h6.jpg";
import h7 from "../../assets/h7.jpg";
import h33 from "../../assets/h33.png";


const Home = () => {
  const loc = useLocation();

  let bool = loc.pathname.startsWith("/adminportal");
  return (
    <>
      <div className="home-page-design">
        <div className="homepage1">
          <div className="img1">
            <img src={h1} alt="" />
          </div>
          <div className="buy-shop">
            <NavLink
              to={bool ? "/adminportal/products" : "/usersportal/products"}
            >
              Buy Now
            </NavLink>
            <NavLink
              to={bool ? "/adminportal/products" : "/usersportal/products"}
            >
              Shop All
            </NavLink>
          </div>
        </div>
        <div className="img2">
          <img src={h2} alt="" />
        </div>

        <div className="grid">
          <div className="one">
            <NavLink to={bool?"/adminportal/products":"/usersportal/products"}>
              <img src={h4} alt="" />
            </NavLink>
            <p>
              Upgrade Your World with NexMart! Discover the latest smartphones
              with stunning cameras, powerful performance, and unbeatable style.
            </p>
          </div>
          <div className="two">
            <NavLink
              to={bool ? "/adminportal/products" : "/usersportal/products"}
            >
              <img src={h5} alt="" />
            </NavLink>
            <p>
              Power Your Productivity! Explore high-performance laptops perfect
              for work, coding, creativity, and entertainment.
            </p>
          </div>
          <div className="three">
            <NavLink
              to={bool ? "/adminportal/products" : "/usersportal/products"}
            >
              <img src={h6} alt="" />
            </NavLink>
            <p>
              Bring Entertainment Home! Experience stunning visuals and
              immersive entertainment with our range of smart TVs.
            </p>
          </div>
          <div className="four">
            <NavLink
              to={bool ? "/adminportal/products" : "/usersportal/products"}
            >
              <img src={h7} alt="" />
            </NavLink>
            <p>
              Level Up Your Gaming! Discover next-level gaming with powerful
              consoles, exciting adventures, and unforgettable experiences.
            </p>
          </div>
        </div>

        <div className="img3">
          <img src={h33} alt="" />
          <NavLink
            to={bool ? "/adminportal/products" : "/usersportal/products"}
          >
            Explore Collections
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
