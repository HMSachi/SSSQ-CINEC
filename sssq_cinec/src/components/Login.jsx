import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Link } from "react-router-dom";

import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png'; 
import signimage from '../components/assets/student.jpg';

const LoginSignup = () => {
  const [formData, setFormData] = useState({ user: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      alert(response.data); 
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div>
            <div className="heading">
              <span className="cinec">CINEC</span>
              <p className="sssq">SSSQ</p>
           </div>


         
    <div className='container1'>
      <div className='header'>
        <div className="text">LOGIN</div>
        <div className='heading2'>Login to web with user email and password </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       

        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      

      <div className="forgot_password"><span>Lost Password? </span> Click Here!</div><br />
      <div>
        <button className="signup" onClick={handleSignup}>Login</button>
        
        <Link to="/LoginSignup">
        <div className="forgot_password"><span>Do not have an Account ?</span> Sign Up </div>
        </Link>
       
      </div>

     
      
    </div>
 <div className="image1" >
 <img src={signimage} alt="SignUp Image" />
</div>
</div>

  );
};

export default LoginSignup;
