import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../apiUrl";
import "../Style/Cart.css";

export default function Cart({ userInformation, authToken, setMessage }) {
  const [cartItems, setCartItems] = useState([]);
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  };
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = () => {
      fetch(`${apiUrl}/cart/${userInformation.user_id}`, { headers })
        .then(async (response) => {
          if (response.status == 200) {
            const { products } = await response.json();

            setCartItems(products);
          } else {
            setMessage({
              message: `Error Code : ${response.status}`,
              type: "error",
            });
            navigate("/");
          }
        })
        .catch((error) => {
          setMessage({
            message: error,
            type: "error",
          });
          navigate("/");
        });
    };
    fetchProducts();
  }, []);

  const handleRemove = (product_name, product_id) => {
    fetch(`${apiUrl}/cart/${userInformation.user_id}/${product_id}`, {
      method: "DELETE",
      headers: { ...headers },
    })
      .then(async (response) => {
        if (response.status == 201) {
          const data = await response.json();
          setMessage({
            message: `${product_name} ${data.message}`,
            type: "success",
          });
          navigate("/products");
        } else {
          setMessage({
            message: `Error Code : ${response.status}`,
            type: "error",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        setMessage({
          message: error,
          type: "error",
        });
        navigate("/");
      });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.product_id} className="cart-item">
              <div className="item-details">
                <span className="item-name">{item.product_name}</span>
                <span className="item-price">${item.price}</span>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.product_name, item.product_id)}
              >
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
