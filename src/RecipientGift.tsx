import { useNavigate } from "react-router-dom";

import './recipient-gift.css';

const RecipientGiftPreview = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate('/recipient-checkout');
  }

  return (
    <div className="recipient-gift-wrapper">
      <div className="gift-message">
        <h3 className="lll-text-medium">Message from Gifter:</h3>
        <div className="gift-message-content lll-text-body-1">
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
        <p className="lll-text-small">
          Pick out any item below. <span className="landmark">It's on Gifter!</span>
        </p>
        <div className="gift-selection-content">
          <div className="product">
            <img src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1" alt="" />
            <div className="price-line">
              <span>Product Name</span>
              <span>$100</span>
            </div>
            {/* add pill here */}
          </div>
          <div className="product">
            <img src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1" alt="" />
            <div className="price-line">
              <span>Product Name</span>
              <span>$100</span>
            </div>
            {/* add pill here */}
          </div>
          <div className="product">
            <img src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1" alt="" />
            <div className="price-line">
              <span>Product Name</span>
              <span>$100</span>
            </div>
            {/* add pill here */}
          </div>
          <div className="product">
            <img src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1" alt="" />
            <div className="price-line">
              <span>Product Name</span>
              <span>$100</span>
            </div>
            {/* add pill here */}
          </div>
        </div>
        <button className="lll-button" type="button" onClick={submit}>Checkout</button>
      </div>
    </div>
  );
};

export default RecipientGiftPreview;
