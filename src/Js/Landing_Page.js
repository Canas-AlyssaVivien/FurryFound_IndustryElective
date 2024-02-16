import logo from '../Images/landing_photo.png';
import '../Css/Landing_Page.css';

function Landing_Page() {
  return (
      <div className='body'>
        <div className='left'>
        <h1>Furry Found</h1>
        <h2>Where Tails Find Happy Endings</h2>
        <br></br>
        <h4>
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
          <img src={logo} className="landing-photo"/>
        </div>
      </div>
  );
}

export default Landing_Page;