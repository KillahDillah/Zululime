import logo from './logo.svg';
import { Link } from 'react-router-dom';

import './recipient-gift.css';

const RecipientGiftPreview = () => {
  return (
    <div className="recipient-gift-wrapper">
      <div className="gift-message">
        <h3 className="gift-message-title">Message from Gifter:</h3>
        <div className="gift-message-content">
          <p>
            I'm baby distillery schlitz normcore 3 wolf moon mukbang tacos pok
            pok. Sus kogi affogato occupy meditation biodiesel cray microdosing
            elit anim dolore incididunt. Jianbing scenester glossier craft beer
            typewriter, ipsum exercitation. Shaman master cleanse portland
            taxidermy street art. Yr bushwick adipisicing woke quinoa. Dolore
            fanny pack laborum cardigan cray tote bag beard lumbersexual.
            Narwhal praxis poutine laboris.
          </p>
          <p> Dummy text? More like dummy thicc text, amirite?</p>
        </div>
      </div>
      <div className="gift-selection">
        <p className="gift-selection-title">
          Pick out any item below. It's on Gifter!
        </p>
        <div className="gift-selection-content">
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
        </div>
        <button type="submit">Checkout</button>
      </div>
    </div>
  );
};

export default RecipientGiftPreview;
