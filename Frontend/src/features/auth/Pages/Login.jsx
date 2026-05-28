import React from "react";
import "../../../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="container">
        <h1 className="loginh1">Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="Loginbutton"> Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/Register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
