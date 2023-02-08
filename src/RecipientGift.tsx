import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './recipient-gift.css';

const RecipientGiftPreview = () => {
  const navigate = useNavigate();
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1);

  const submit = () => {
    navigate('/recipient-checkout');
  };

  const selectProduct = (index: any) => {
    setSelectedProductIndex(index);
    // index === selectedProductIndex ? setSelectedProductIndex(index) : setSelectedProductIndex(-1);
  };

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
          Pick out any item below.{' '}
          <span className="landmark">It's on Gifter!</span>
        </p>
        <div className="gift-selection-content">
          <div
            className={`product ${
              selectedProductIndex === 0 && 'selected-product'
            }`}
            onClick={() => selectProduct(0)}
          >
            <div className="product-image">
              <img
                src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1"
                alt=""
              />
              <div className="lll-pill">wishlist</div>
            </div>
            <div className="price-line">
              <span>Scuba Oversized 1/2 Zip Hoodie</span>
            </div>
          </div>
          <div
            className={`product ${
              selectedProductIndex === 1 && 'selected-product'
            }`}
            onClick={() => selectProduct(1)}
          >
            <div className="product-image">
              <img
                src="https://images.lululemon.com/is/image/lululemon/LU9A79S_3327_1"
                alt=""
              />
            </div>
            <div className="price-line">
              <span>The Reversible Mat 5mm</span>
            </div>
          </div>
          <div
            className={`product ${
              selectedProductIndex === 2 && 'selected-product'
            }`}
            onClick={() => selectProduct(2)}
          >
            <div className="product-image">
              <img
                src="https://images.lululemon.com/is/image/lululemon/LM5A43S_038293_1"
                alt=""
              />
              <div className="lll-pill">in closet</div>
            </div>
            <div className="price-line">
              <span>ABC Pant Classic 30" Warpstreme Online Only</span>
            </div>
          </div>
          <div
            className={`product ${
              selectedProductIndex === 3 && 'selected-product'
            }`}
            onClick={() => selectProduct(3)}
          >
            <div className="product-image">
              <img
                src="https://images.lululemon.com/is/image/lululemon/LW5DRKS_049230_1"
                alt=""
              />
              <div className="lll-pill">new</div>
            </div>
            <div className="price-line">
              <span>lululemon Align™ Super-High-Rise Pant 28" Online Only</span>
            </div>
            {/* add pill here */}
          </div>
        </div>
        <button className="lll-button" type="button" onClick={submit}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default RecipientGiftPreview;
