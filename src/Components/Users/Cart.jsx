import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  // back

  let navigate=useNavigate()

  // Load cart items
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Remove product
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product removed from cart");
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  );

  return (
    <div className="cart-containeer">
      <div className="right-container">
        <div className="cart-heading">
          <h2>YOUR CART</h2>
          <p>{cartItems.length} product(s)</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty!</h3>
            <p onClick={()=>navigate("/usersportal/products")}>Add some products to your cart. <span>Click here ?</span></p>

          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-product-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-product-details">
                <h3>{item.title}</h3>

                <p className="cart-price">
                  Price: ₹{Math.floor(Number(item.price) * 81)}
                </p>

                <div className="quantity-control">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        <div className="div">
          <p onClick={()=>navigate("/usersportal/products")}>
        
            <ArrowBackIcon /> Back
          </p>
        </div>
      </div>

      <div className="left-container">
        <h2>ORDER SUMMARY</h2>

        <div className="summary-row">
          <span>Total items</span>
          <span>
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </div>

        <div className="summary-row">
          <span>Total price</span>
          <span>₹{Math.floor(totalPrice * 81)}</span>
        </div>

        <hr />

        <div className="summary-row grand-total">
          <strong>Grand Total</strong>
          <strong>₹{Math.floor(totalPrice * 81)}</strong>
        </div>

        <button
          className="checkout-btn"
          disabled={cartItems.length === 0}
          onClick={() => toast.info("Checkout feature coming soon!")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
