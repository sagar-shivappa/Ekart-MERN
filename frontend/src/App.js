import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

import Login from "./Components/Login";
import Messanger from "./Components/Messanger";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState({ message: "", type: "" });
  const [loginStatus, setLoginStatus] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userInformation, setUserInformation] = useState({
    user_name: "",
    user_id: 0,
  });

  return (
    <>
      {message.message ? (
        <Messanger message={message} setMessage={setMessage} />
      ) : (
        <></>
      )}

      <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setMessage={setMessage}
              setLoginStatus={setLoginStatus}
              setAuthToken={setAuthToken}
              setUserInformation={setUserInformation}
            />
          }
        ></Route>
        <Route
          path="products"
          element={
            <Products
              authToken={authToken}
              userInformation={userInformation}
              setMessage={setMessage}
            />
          }
        ></Route>
        <Route
          path="cart"
          element={
            <Cart
              authToken={authToken}
              userInformation={userInformation}
              setMessage={setMessage}
            />
          }
        ></Route>
        <Route path="*" element={<Login />}></Route>
      </Routes>
    </>
  );
}
