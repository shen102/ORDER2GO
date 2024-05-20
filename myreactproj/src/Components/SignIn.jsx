import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform validation
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
    } else {
      // Perform sign-in logic here
      // You can add your own logic to validate the credentials and redirect to another page
      alert('Sign in successful!');
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
       <Link to="/home" style={{ textDecoration: "none" }}>
          <button type="button" onClick={handleSignIn}>Sign In</button>
        </Link>
        
      </form>
      


      <div className='signup'>
          <div  className='sp'>
              <div className='no-account'>Dont have an account yet?</div>
              <div className='signups'>Sign up</div>
          </div>
          
        </div>
    </div>
    
  );
}

export default Signin;