import React, { useState } from 'react';
import './App.css';

function SignIn() {
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
    <div>
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

        <button type="button" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;