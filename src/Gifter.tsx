

const Gifter = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-5">
      <h2>Confident gift-giving</h2>
        <form className="w-1/2 m-5">
          <div className="flex justify-between">
            <div className="mb-6 w-1/2 mr-3">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
              <input type="text" id="firstName" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name" required />
            </div>
            <div className="mb-6 w-1/2">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
              <input type="text" id="lastName" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last Name" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">lululemon account email</label>
            <input type="email" id="email" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
          </div>
          <div className="flex justify-between">
            <div className="mb-6 w-1/2 mr-3">
            <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-gray-900">Occasion</label>
            <select className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option>Anniversary</option>
              <option>Birthday</option>
              <option>Best Friends</option>
              <option>I Love You</option>
              <option>Just Because</option>
            </select>
              {/* <input type="occasion" id="occasion" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name" required /> */}
            </div>
            <div className="mb-6 w-1/4 mr-3">
              <label htmlFor="priceLow" className="block mb-2 text-sm font-medium text-gray-900">Min Price</label>
            {/* <span className="currencyinput text-sm">$ */}
            <input type="text" id="priceLow" name="currency" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price" required />
          {/* </span> */}
            </div>
            <div className="mb-6 w-1/4">
              <label htmlFor="priceHigh" className="block mb-2 text-sm font-medium text-gray-900">Max Price</label>
              <input type="text" id="priceHigh" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price" required />
            </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900"> Gift Message:
        <textarea id="giftMessage" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </label>
      </form>
      {/* Products */}
      {/* Search */}
      {/* Suggested */}
      <div className="w-1/2">
        <p className="text-xl">Suggested Products:</p>
        <br/>
        <div className='flex justify-between'>
          <img src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="pants" className="h-40 w-40"/>
          <img src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="pants" className="h-40 w-40"/>
          <img src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="pants" className="h-40 w-40"/>
        </div>
      </div>
      <button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

    </main>
  );
};

export default Gifter;
