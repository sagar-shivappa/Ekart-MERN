import "../Style/Item.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { apiUrl } from "../apiUrl";
import { useNavigate } from "react-router-dom";

export default function Item({
  product,
  userInformation,
  authToken,
  setMessage,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  // Handle Add to Cart button click
  const handleAddToCart = async () => {
    setIsAdded(true);
    const addToCart = {
      user_id: userInformation.user_id,
      product_id: product.product_id,
    };
    try {
      await fetch(`${apiUrl}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(addToCart),
      })
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            setMessage({
              message: data.message,
              type: "success",
            });
            navigate("/cart");
          } else {
            setMessage({
              message: data.message,
              type: "error",
            });
          }
        })
        .catch((error) => {
          setMessage({
            message: "Error occured while processing, Retry.",
            type: "error",
          });
        });
    } catch (error) {
      console.log(error);
      navigate("");
    }
    // Logic to add the product to the cart goes here
    console.log("Added to cart:", product.product_name, product.product_id);
  };

  // Handle Buy button click
  const handleBuyNow = () => {
    // Logic to buy the product goes here
    console.log("Buying now:", product.product_name);
  };

  return (
    <div className="product">
      <h2>{product.product_name}</h2>
      <p>{product.product_description}</p>
      <p>
        <strong>Price:</strong> {product.price.toFixed(2)}
      </p>
      <p>
        <strong>Brand:</strong> {product.product_brand}
      </p>

      <div className="buttons">
        <button onClick={handleAddToCart} disabled={isAdded}>
          Add to
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}
