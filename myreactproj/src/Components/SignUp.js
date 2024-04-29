import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform validation on the input values
    if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    // Perform additional validation if needed

    // Create a new user object with the input values
    const user = {
      username: username,
      email: email,
      password: password
    };

    // Perform sign-up process (e.g., send data to server, store in database, etc.)
    // Replace this with your actual sign-up logic

    // Display success message
    alert('Sign-up successful!');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;