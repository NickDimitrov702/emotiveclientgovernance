import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
       
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
     
       
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
       
      
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
