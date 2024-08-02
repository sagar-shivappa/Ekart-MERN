import { useEffect, useState } from "react";
import { apiUrl } from "../apiUrl";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

export default function Products({ authToken, setMessage, userInformation }) {
  const [products, setProducts] = useState([]);
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  };
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = () => {
      fetch(`${apiUrl}/products`, { headers })
        .then(async (response) => {
          if (response.status == 200) {
            const products = await response.json();
            setProducts(products);
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
  return (
    <div className="product_displayer">
      {products.map((prod) => (
        <Item
          authToken={authToken}
          userInformation={userInformation}
          key={prod.product_id}
          product={prod}
          setMessage={setMessage}
        />
      ))}
    </div>
  );
}
