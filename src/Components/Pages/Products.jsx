import axios from "axios";
import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch products from API
  let fetchApi = async () => {
    try {
      let apiResponse = await axios.get("http://localhost:4000/products");
      setProducts(apiResponse.data);
    } catch (error) {
      // console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const navigate = useNavigate();

  // View more

  const loc = useLocation();

  let bool = loc.pathname.startsWith('/adminportal');

  let veiwMore = (productId) => {
    bool
      ? navigate(`/adminportal/veiwmore/${productId}`)
      : navigate(`/usersportal/veiwmore/${productId}`);
  };

  // Categories
  let categoryArray = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  // Handle category selection
  let filterCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter products
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (elem) =>
            elem.category?.trim().toLowerCase() ===
            selectedCategory.trim().toLowerCase(),
        );

  return (
    <>
      <div className="products">
        <div className="category">
          <h2>Select Category : </h2>

          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={filterCategory}
          >
            <option value="All">--All--</option>

            {categoryArray.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>

        <div className="cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((elem) => {
              let { id, title, price, category, image, rating } = elem;

              return (
                <div className="card" key={id}>
                  <div className="cat">{category}</div>

                  <div className="images">
                    <img src={image} alt={title || "Product"} />
                  </div>

                  <div className="title">{title}</div>

                  <div className="box">
                    <div className="rating">
                      {rating?.rate ?? 0}
                      <StarBorderIcon className="star" />
                    </div>

                    <div className="price">
                      {Math.floor(Number(price || 0) * 81)} /-
                    </div>
                  </div>

                  <button onClick={() => veiwMore(id)}>View more</button>
                </div>
              );
            })
          ) : (
            <h3>No products found in this category.</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
