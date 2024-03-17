import logo from '../Images/logo.png';
import '../Css/Navbar.css';

function Navbar({ handleGetStarted }) {
  return (
      <div className="NavBar">
        <div className="NavBar-left">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-name">FURRYFOUND</span>
        </div>
        <div className="NavBar-right">
          <button className="app-bar-button">Home</button>
          <button className="app-bar-button">About Us</button>
          <button className="last-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
  );
}

export default Navbar;