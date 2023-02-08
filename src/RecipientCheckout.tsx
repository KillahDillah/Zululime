import './recipient-checkout.css';

const RecipientCheckout = () => {
  return (
    <div className="checkout-wrapper">
      <h1 className="lll-text-medium title">Checkout</h1>
      <div className="checkout-main">
        <div className="shipping">

          <div className="main-section">
            <h2 className="lll-text-small">Shipping Address</h2>
            <div className="address">
              <input type="radio" name="address" id="address-1" />
              <p>Address</p>
            </div>
            <hr />
            <div className="address">
              <input type="radio" name="address" id="address-1" />
              <p>Address</p>
            </div>
            <hr />
            <div className="address">
              <input type="radio" name="address" id="address-1" />
              <p>New shipping address</p>
            </div>
          </div>

          <div className="main-section">
            <h2 className="lll-text-small">Shipping & Gift Options</h2>
            <p>Arrives by:</p>
            <p>Sat, Feb 11</p>
            <p>Standard Shipping (FREE)</p>
          </div>
          <button className='lll-button lll-button-primary' type='submit'>Complete your order</button>

        </div>



        <div className="summary">
            <h2 className="lll-text-small">Order Summary</h2>
            <div className='price-line'>
                <span>1 item</span>
                <span>$41.14</span>
            </div>
            <hr />
            <div className='price-line'>
                <div className="summary-product">
                    <img src="https://images.lululemon.com/is/image/lululemon/LW3ECKS_0001_1" alt="" />
                    <p>product info</p>
                </div>
                <span>$100</span>
            </div>
            <hr />
            <div className='price-line'>
                <span>Subtotal</span>
                <span>$38.00</span>
            </div>
            <div className='price-line'>
                <span>Shipping</span>
                <span>FREE</span>
            </div>
            <div className='price-line'>
                <span>Tax</span>
                <span>$3.14</span>
            </div>
            <hr />
            <div className='price-line'>
                <span>Order total</span>
                <span>USD$41.14</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientCheckout;
