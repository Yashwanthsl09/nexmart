import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";

const AddProducts = () => {
  let navigate = useNavigate();

  // perfroming category

  let allCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: "", count: "" },
  });

  // to add product

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    if (key === "rate" || key === "count") {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [key]: val,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [key]: val,
      });
    }
  };

  // add the products to api or submite

  let handleSubmit = async (e) => {
    e.preventDefault();

    let productData = {
      // this condition because of covert string value into number
      ...newProduct,
      price: Number(newProduct.price),
      rating: {
        rate: Number(newProduct.rating.rate),
        count: Number(newProduct.rating.count),
      },
    };

    try {
      let addProduct = await axios.post(
        "http://localhost:4000/products",
        productData,
      );

      toast.success("product added sucessfully..");
      navigate("/adminportal/products");
    } catch (error) {
      toast.error("product is not added");
    }
  };

  let clearSubmit = () => {
    navigate("/adminportal/products");
  };

  return (
    <>
      <div className="add-product" onSubmit={handleSubmit}>
        <div className="form-box">
          <div className="clear">
            {/* <p onClick={clearSubmit} ><ClearIcon/></p> */}
            <p onClick={() => navigate("/adminportal/products")}>
              <ClearIcon />
            </p>
          </div>
          <form action="">
            <div className="input-fields">
              <input
                type="text"
                placeholder="Enter Title"
                onChange={handleInput}
                name="title"
                value={newProduct.title}
                required
              />
              <input
                type="text"
                placeholder="Enter Price"
                onChange={handleInput}
                name="price"
                value={newProduct.price}
                required
              />
              <input
                type="text"
                placeholder="Enter Description"
                onChange={handleInput}
                name="description"
                value={newProduct.description}
                required
              />
              <select name="category" id="" onChange={handleInput} required>
                <option value={newProduct.category}>
                  ---select category---
                </option>
                {allCategories.map((elem, index) => {
                  return (
                    <option key={index} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                placeholder="Enter Image Url"
                onChange={handleInput}
                name="image"
                value={newProduct.image}
                required
              />
              <input
                type="text"
                placeholder="Enter Rating"
                onChange={handleInput}
                name="rate"
                value={newProduct.rating.rate}
                required
              />
              <input
                type="text"
                placeholder="Enter Count"
                onChange={handleInput}
                name="count"
                value={newProduct.rating.count}
                required
              />
              <button>Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
// /addproducts
