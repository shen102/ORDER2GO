import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Check if the email and password match the admin credentials
    if (email === "admin@example.com" && password === "Admin@123") {
      navigate("../../admin_dashboard"); // Navigate up one level to the admin dashboard
    } else {
      navigate("/home"); // Redirect regular users to the homepage
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>

        <Link to="/signup" style={{ textDecoration: "none" }}>
          <center>
            <p>
              Not have an account?{" "}
              <a href="/signup" className="link">
                Sign Up Here
              </a>
            </p>
          </center>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
