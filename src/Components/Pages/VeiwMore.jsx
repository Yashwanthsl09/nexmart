import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const VeiwMore = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const params = useParams();
  const productId = params.id;

  const fetchSingleProduct = async () => {
    try {
      const resApi = await axios.get(
        `http://localhost:4000/products/${productId}`,
      );

      setSingleProduct(resApi.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  const { id, title, price, category, image, rating, description } =
    singleProduct;

  //close card

  let navigate = useNavigate();

  let closeCard = () => {
    navigate("/adminportal/products");
  };

  // delete function

  let deleteProduct = async (id) => {
    let bool = window.confirm("Do you want to delete the product");

    if (bool) {
      await axios.delete(`http://localhost:4000/products/${id}`);
      toast.error("product is deleted");
      navigate("/adminportal/products");
    } else {
      toast.warning("not deleted");
    }
  };

  const loc = useLocation();

  let bool = loc.pathname.startsWith("/adminportal");

  // add to cart function

  // Add product to cart
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === singleProduct.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === singleProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...singleProduct,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Product added to cart");
    navigate("/usersportal/cart");
  };

  return (
    <>
      <div className="veiw-more">
        <div className="veiw-card">
          {/* clear icon */}

          <div className="clear">
            {/* <p onClick={closeCard}><ClearIcon/></p> */}

            {bool ? (
              <NavLink to="/adminportal/products">
                <ClearIcon />
              </NavLink>
            ) : (
              <NavLink to="/usersportal/products">
                <ClearIcon />
              </NavLink>
            )}
          </div>

          {/* left */}
          <div className="left">
            <div className="imgs">
              <h2>{category}</h2>
              <img src={image} alt={title || "Product"} />
            </div>
          </div>

          {/* right */}
          <div className="right">
            <h2>{title}</h2>

            <p>{description}</p>

            <div className="rating">
              <h4>Rating: {rating?.rate ?? "N/A"}</h4>

              <h4>Price: ₹{Math.floor(price * 81.0)}</h4>
            </div>
            {bool ? (
              <button onClick={() => deleteProduct(id)}>Delete</button>
            ) : (
              <button onClick={addToCart}>Add to cart</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default VeiwMore;
