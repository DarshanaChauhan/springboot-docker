import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // You can store this in localStorage or just simulate it
    if (email && password) {
      // Simulate registration logic
      setRegisterStatus("Registration successful!");
      setTimeout(() => {
        navigate("/"); // Go to navbar/home after successful registration
      }, 1000);
    } else {
      setRegisterStatus("Please enter all fields.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        {registerStatus && <p>{registerStatus}</p>}
      </form>
    </div>
  );
};

export default Register;
