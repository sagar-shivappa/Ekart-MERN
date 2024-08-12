import { useState } from "react";
import "../style/Login.css";
import { apiUrl } from "../apiUrl";
import { useNavigate } from "react-router-dom";

export default function Login({
  setMessage,
  setLoginStatus,
  setAuthToken,
  setUserInformation,
}) {
  const [loginRequest, setLoginRequest] = useState({
    user_name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      })
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            const { token } = data;
            setUserInformation(data.user_info);
            setAuthToken(token);
            setMessage({
              message: "Successfully Logged In",
              type: "success",
            });
            await setLoginStatus(true);
            navigate("/products");
          } else {
            setAuthToken("");
            setMessage({
              message: "Invalid username or password",
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
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div data-testid="user-name" className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={loginRequest.user_name}
            onChange={(e) =>
              setLoginRequest({ ...loginRequest, user_name: e.target.value })
            }
            required
          />
        </div>
        <div data-testid="password" className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginRequest.password}
            onChange={(e) =>
              setLoginRequest({ ...loginRequest, password: e.target.value })
            }
            required
          />
        </div>
        <button data-testid="submit-Bn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
