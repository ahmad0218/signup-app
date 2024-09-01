import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "Buyer",
    email: "",
    organisation: "",
    telephone: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the appropriate API endpoint based on environment
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    try {
      const response = await fetch(`${endpoint}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Sign-Up Successful!");
      } else {
        alert("Sign-Up Failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="Buyer">Buyer</option>
          <option value="Supplier">Supplier</option>
        </select>
      </div>

      <div>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Organisation:</label>
        <input
          type="text"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Telephone:</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
