import '../Css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Landing_Page from './Landing_Page';

function App() {
  return (
    <Router>
      <div className='MainPage'>
        <Navbar/>
        <Landing_Page/>
      </div>
    </Router>
  );
}

export default App;