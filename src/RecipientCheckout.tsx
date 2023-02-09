import { useNavigate } from 'react-router-dom';
import './recipient-checkout.css';

const RecipientCheckout = () => {
  const navigate = useNavigate();
  const completeOrder = () => {
    navigate('/recipient-confirmation');
  };

  return (
    <div className="checkout-wrapper">
      <h1 className="lll-text-medium title">Checkout</h1>
      <div className="checkout-main">
        <div className="shipping">
          <div className="main-section">
            <h2 className="lll-text-small">Contact Information</h2>
            <div className="section-content">
              <div className="full-address">
                <label htmlFor="email">
                  Email Address (for order notification)
                </label>
                <input
                  className="lll-email-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="test@lululemon.com"
                />
                <span>
                  <input type="checkbox" name="signup" id="signup" /> Sign me up
                  for lululemon emails (you can unsubscribe at any time). See
                  our privacy policy for details.
                </span>
              </div>
            </div>
          </div>

          <div className="main-section">
            <h2 className="lll-text-small">Shipping Address</h2>
            <div className="address-select section-content">
              <input type="radio" name="address" id="address-1" />
              <div className="full-address">
                <span>Donovan Allen</span>
                <span>1234 Yoga Ln</span>
                <span>Los Angeles, CA 12345, USA</span>
                <span>(555) 111-1234</span>
              </div>
            </div>
            <hr />
            <div className="address-select section-content">
              <input type="radio" name="address" id="address-1" />
              <div className="full-address">
                <span>Donovan Allen</span>
                <span>1234 Sweater Dr</span>
                <span>San Diego, CA 12543, USA</span>
                <span>(555) 111-1234</span>
              </div>
            </div>
            <hr />
            <div className="address-select section-content">
              <input type="radio" name="address" id="address-1" />
              <p>New shipping address</p>
            </div>
          </div>

          <div className="main-section">
            <h2 className="lll-text-small">Shipping & Gift Options</h2>
            <div className="section-content">
              <p>Arrives by:</p>
              <p>Sat, Feb 11</p>
              <p>Standard Shipping (FREE)</p>
            </div>
          </div>
          <button className='lll-button lll-button-primary' type='submit' onClick={completeOrder}>Complete your order</button>
        </div>

        <div className="summary">
          <h2 className="lll-text-small">Order Summary</h2>
          <div className="price-line">
            <span className="icon-label">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                role="img"
                aria-labelledby="icon_e93a5a4e-1b30-405f-a0de-b38954811cc3"
                aria-hidden="false"
              >
                <title id="icon_e93a5a4e-1b30-405f-a0de-b38954811cc3">
                  bag Icon
                </title>
                <path
                  d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              1 item
              <svg
                height="8"
                width="14"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 14 8"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                role="img"
                aria-labelledby="icon_89f461a1-aba8-42f5-a7fb-397dc6941c5d"
                aria-hidden="false"
              >
                <title id="icon_89f461a1-aba8-42f5-a7fb-397dc6941c5d">
                  carat Icon
                </title>
                <path
                  d="m13 .99-6.47 6.5a.74.74 0 0 1-1.06 0L-1 .99l.35-.35a1 1 0 0 1 1.41 0L6 5.86 11.24.6a1 1 0 0 1 1.41 0z"
                  fill-rule="evenodd"
                  stroke="none"
                ></path>
              </svg>
            </span>
            <span>$41.14</span>
          </div>
          <hr />
          <div className="price-line">
            <div className="summary-product">
              <img
                src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1"
                alt=""
              />
              <div className='summary-product-details'>
                <span>
                  Scuba Oversized 1/2 Zip Hoodie
                </span>
                <span>Black</span>
                <span>Size L</span>
                <div className="price-line">
                  <span>Quantity 1</span>
                  <span>$38.00</span>
                </div>
              </div>
            </div>
            <span>$100</span>
          </div>
          <hr />
          <div className="price-line">
            <span>Subtotal</span>
            <span>$38.00</span>
          </div>
          <div className="price-line">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="price-line">
            <span>Tax</span>
            <span>$3.14</span>
          </div>
          <hr />
          <div className="price-line">
            <span>Order total</span>
            <span>USD$41.14</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientCheckout;
