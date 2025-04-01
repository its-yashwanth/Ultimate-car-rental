import React, { useState } from 'react';
import './Signin.css';

const SigninForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      if (response.ok) {
        const data = await response.json();
        alert('Signin successful!');
        // Store the token if needed for authentication
        localStorage.setItem('token', data.token);
      } else {
        alert('Signin failed.');
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signin-button">Login</button>
      </form>
    </div>
  );
};

export default SigninForm;