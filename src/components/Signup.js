import React, { useState } from 'react';
import './Signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password, email, phone } = formData;
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, email, phone }),
      });
      if (response.ok) {
        alert('Signup successful!');
      } else {
        alert('Signup failed.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div className="login_page_wrp">
    <div className="login_card">
      <h1>Sign up</h1>
      <p>If you don’t have an account, register</p>
      <p className="mb-3">
        You can <a href="/signin">Login here!</a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="my_label">Name*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="my_label">Password*</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="my_label">Email ID*</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="my_label">Phone Number*</label>
          <input
            type="tel"
            className="form-control phone_input"
            placeholder="+91"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn_login">
          Submit
        </button>
      </form>
      <p className="login_prompt">
        If you already have an account, please <a href="/signin">log in</a>.
      </p>
    </div>
    </div>
  );
};

export default SignupForm;