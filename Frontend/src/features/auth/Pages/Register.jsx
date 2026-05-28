import React from "react";
import "../../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <h1 className="loginh1">Register</h1>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>

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

          <button className="Loginbutton">Register</button>
        </form>

        <p>
          Already have an account?
          <Link className="link" to="/"> Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
