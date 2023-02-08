import logo from './assets/Lululemon_logo.png';
import { Link } from 'react-router-dom';

import './recipient.css';

const Recipient = () => {
  return (
    <div className="recipient-landing-wrapper">
      {/* lights */}
      {/* <div className="light1">
          <div className="ray left"></div>
          </div>
          
          <div className="light2">
          <div className="ray right"></div>
        </div> */}
      <div className="hero-text">
        <p>Hey Leah,</p>
        <p>Someone thinks you're pretty great!</p>
      </div>
      <Link className="gift-img" to={'/recipient-gift'}>
        <img src={logo} className="" alt="logo" />
      </Link>
      <p className="gift-label">See what Gifter got for you!</p>
    </div>
  );
};

export default Recipient;
