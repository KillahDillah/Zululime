import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiftContext } from './GiftContext';

const Gifter = () => {
  const navigate = useNavigate();
  const { giftProfile, setGiftProfile } = useContext(GiftContext);

  const submitForm = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setGiftProfile(formJson);

    console.log(occasion, theme);
    navigate('/gifter-checkout');
  };

  const occasionOptions = [
    { value: 'best_friends', text: 'Best Friends' },
    { value: 'love_you', text: 'I Love You' },
    { value: 'anniversary', text: 'Anniversary' },
    { value: 'birthday', text: 'Birthday' },
    { value: 'other', text: 'Other' },
  ];

  const themes = [

    {
      occasion: 'love_you',
      id: 'Love1',
      imgSrc:
        'https://d1i8t2ah6myua2.cloudfront.net/uploads/cards/pictures/658c3ee593205df0b270d8b1b6e227c36d9b387f.jpg?1674791812',
    },
    {
      occasion: 'love_you',
      id: 'Love2',
      imgSrc:
        'https://d1i8t2ah6myua2.cloudfront.net/uploads/cards/pictures/e2bd608875a19903079d768c299771553b0220cb.jpg?1673456045',
    },
    {
      occasion: 'love_you',
      id: 'Love3',
      imgSrc:
        'https://d1i8t2ah6myua2.cloudfront.net/uploads/cards/pictures/cd67f191c59e2846a575f04834dab905fdd04733.jpg?1670600260',
    },
  ];

  const [occasion, setOccasion] = useState(occasionOptions[0].value);
  const [theme, setTheme] = useState('');

  return (
    <main className="w-screen h-auto flex items-center justify-center flex-col gap-5">
      <h2 className='lll-text-medium title'>Confident gift-giving</h2>
      <form onSubmit={submitForm} className="w-1/2 m-5">
        <div className="flex justify-between">
          <div className="mb-6 w-1/2 mr-3">
            <label
              htmlFor="recFirstName"
              className="lll-text-subtitle"
            >
              Recipient First Name
            </label>
            <input
              type="text"
              name="recFirstName"
              className="lll-text-input block w-full"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="recLastName"
              className="lll-text-subtitle"
            >
              Recipient Last Name
            </label>
            <input
              type="text"
              name="recLastName"
              className="lll-text-input block w-full"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="recEmail"
            className="lll-text-subtitle"
          >
            Recipient Email <br />
            Enter the email associated with their lululemon account to get
            personalized gift suggestions
          </label>
          <input
            type="email"
            name="recEmail"
            className="lll-text-input block w-full"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-6 w-1/2 mr-3">
            <label
              htmlFor="occasion"
              className="lll-text-subtitle"
            >
              Occasion
            </label>
            <select
              name="occasion"
              onChange={(e) => setOccasion(e.target.value)}
              className="lll-select-input lll-text-body-1 block w-full"
            >
              {occasionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {/* <input type="occasion" id="occasion" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name" required /> */}
          </div>
          <div className="mb-6 w-1/4 mr-3">
            <label
              htmlFor="minPrice"
              className="lll-text-subtitle"
            >
              Min Price
            </label>
            {/* <span className="currencyinput text-sm">$ */}
            <input
              type="text"
              name="minPrice"
              className="lll-text-input block w-full"
              placeholder="Price"
              required
            />
            {/* </span> */}
          </div>
          <div className="mb-6 w-1/4">
            <label
              htmlFor="maxPrice"
              className="lll-text-subtitle"
            >
              Max Price
            </label>
            <input
              type="text"
              name="maxPrice"
              className="lll-text-input block w-full"
              placeholder="Price"
              required
            />
          </div>
        </div>
        <label className="lll-text-subtitle">
          {' '}
          Gift Message:
          <textarea
            name="giftMessage"
            className="lll-textarea-input block w-full p-2.5"
          />
        </label>
        <div className="flex justify-between">
          <div className="mb-6 w-1/2 mr-3">
            <label
              htmlFor="gifterFirstName"
              className="lll-text-subtitle"
            >
              Your First Name
            </label>
            <input
              type="text"
              name="gifterFirstName"
              className="lll-text-input block w-full"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="gifterLastName"
              className="lll-text-subtitle"
            >
              Your Last Name
            </label>
            <input
              type="text"
              name="gifterLastName"
              className="lll-text-input block w-full"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="gifterEmail"
            className="lll-text-subtitle"
          >
            Your Email
          </label>
          <input
            type="email"
            name="gifterEmail"
            className="lll-text-input block w-full"
            placeholder="name@email.com"
            required
          />
        </div>
        {/* Products */}
        {/* Search */}
        {/* Suggested */}
        <div className="w-1/2">
          <p className="lll-text-subtitle">Themes:</p>
          <br />
          <div className="flex justify-between">
            {themes.map((theme) => (
              <button
                className="border-none hover:outline-none hover:ring hover:ring-red-300 rounded-sm"
                onClick={() => setTheme(theme.id)}
                key={theme.id}
              >
                <img
                  src={theme.imgSrc}
                  alt="ya"
                  className="h-40 w-40 rounded-sm"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <p className="lll-text-subtitle">Suggested Products:</p>
          <br />
          <div className="flex justify-between">
            <img
              src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="pants"
              className="h-40 w-40 rounded-sm hover:outline-none hover:ring hover:ring-red-300"
            />
            <img
              src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="pants"
              className="h-40 w-40 rounded-sm hover:outline-none hover:ring hover:ring-red-300"
            />
            <img
              src="https://images.lululemon.com/is/image/lululemon/LW5CTIS_052871_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="pants"
              className="h-40 w-40 rounded-sm hover:outline-none hover:ring hover:ring-red-300"
            />
          </div>
        </div>
        <button
          type="submit"
          className="lll-button lll-button-primary"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Gifter;
