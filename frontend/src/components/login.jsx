import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // User is authenticated, save the token and userDetails to localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user-details",
          JSON.stringify(response.data.user)
        );
        console.log(response);
        // Redirect to the home page
        navigate("/");
      } else {
        // Login failed, display an error message
        alert(response.data.error);
      }
    } catch (error) {
      alert(error.response.data.error)
    }
  };

  return (
    <form className="container flex" id="login-form" onSubmit={handleSubmit}>
      <h1>Instagram Login</h1>
      <div className="input-box flex">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-box flex">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <div className="forgot flex">
        <span>Forgot Password?</span>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </form>
  );
}
