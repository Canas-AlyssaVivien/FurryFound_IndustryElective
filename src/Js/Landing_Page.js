import logo from '../Images/landing_photo.png';
import '../Css/Landing_Page.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Landing_Page({ showSignUpForm, toggleSignUpForm }) {
  const [showLogInForm, setShowLogInForm] = useState(false);
  const navigate = useNavigate();

  const toggleLogInForm = () => {
    toggleSignUpForm(false);
    setShowLogInForm(!showLogInForm); 
  };

  const handleLogin = () => {
    navigate('/pets');
  };
  
  return (
      <div className='body'>
        <div className='left'>
          <div className='name'>
            <h1>Furry</h1>
            <h1>Found</h1>
          </div>
        <h2>Where Tails Find Happy Endings</h2>
        <br></br>
        <h4 className='para'>
          {[
            "Discover your future furry friend and",
            "embark on a journey of love, companionship,",
            "and endless tail-wagging adventures."
          ].map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h4>
        <br></br>
        <button className="button">LEARN MORE</button>
        </div>
        <div className='right'>
          {showSignUpForm ? (
            <form className="signup-form">
              <div className='signUp'>
                <h3>SIGN UP</h3>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Shelter Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Contact Person" />
                <input type="text" placeholder="Contact Number" />
                <input type="text" placeholder="Password" />
                <button type="submit">Create Account</button>

                <div className='pangLogIn'>
                  <h5>Already Have an Account?</h5>
                  <button className='Lbutton' onClick={toggleLogInForm}>Log In</button>
                </div>
              </div>
            </form>
          ) : showLogInForm ? (
            // <form className="login-form">
            <form className="login-form" onSubmit={handleLogin}>
              <div className='signUp'>
                <h3>LOG IN</h3>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Password" />
                <button type="submit">Log In</button>

                <div className='pangLogIn'>
                  <h5>Don't Have an Account?</h5>
                  <button className='Lbutton' onClick={toggleSignUpForm}>Sign Up</button>
                </div>
              </div>
            </form>
          ) : (
            <img src={logo} className="landing-photo" alt="logo"/>
          )}
        </div>
      </div>
  );
}

export default Landing_Page;