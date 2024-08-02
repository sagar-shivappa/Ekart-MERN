import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ loginStatus, setLoginStatus }) {
  const navigate = useNavigate();

  const logout = async () => {
    setLoginStatus(false);
    navigate("");
  };

  const openCart = () => {
    navigate("/cart");
  };
  return (
    <header className="header">
      <h1>Ekart App</h1>
      {loginStatus ? (
        <>
          <div className="cart-icon">
            <FontAwesomeIcon onClick={openCart} icon={faShoppingCart} />
            <a onClick={logout}>Log-Out</a>
          </div>
        </>
      ) : (
        <></>
      )}
    </header>
  );
}
