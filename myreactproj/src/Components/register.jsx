import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSignUp = () => {
    // Perform validation
    if (name === "" || email === "" || password === "" || birthday === "") {
      alert("Please fill in all the required fields.");
    } else {
      // Perform sign-up logic here
      // You can add your own logic to store the user data or redirect to another page
      alert("Sign up successful!");
    }
  };

  return (
    <div className="container">
      <form>
        <h1>Sign Up</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="buttona" onClick={handleSignUp}>
          Sign Up
        </button>

        
        <Link to="/signup" style={{ textDecoration: "none" }}>
         <center><p>
            Have an account?{" "}
            <a href="/signup" className="link">
              Sign in
            </a>
          </p>
          </center> 
        </Link>
      </form>
    </div>
  );
};
export default SignUpForm;
