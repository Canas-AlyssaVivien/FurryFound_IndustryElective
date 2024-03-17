import '../Css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Landing_Page from './Landing_Page';

function App() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <Router>
      <div className='MainPage'>
        <Navbar handleGetStarted={toggleSignUpForm} />
        <Landing_Page showSignUpForm={showSignUpForm} toggleSignUpForm={toggleSignUpForm} />
      </div>
    </Router>
  );
}

export default App;