import logo from './assets/Lululemon_logo.png';
import {Link} from 'react-router-dom';

import './recipient.css';



const Recipient = () => {
  return (
        <Link to={'/recipient-gift-preview'}>
      <main className="w-screen h-screen bg-black flex items-center justify-center flex-col gap-5">

        {/* lights */}
        <div className="light1">
            <div className="ray left"></div>
        </div>

        <div className="light2"> 
            <div className="ray right"></div>
        </div>

      <img
        src={logo}
        className="pointer-events-none w-[10rem]"
        alt="logo"
      />
      <h1 className="text-white text-lg sm:text-4xl">
        Hey Leah,
      </h1>
      <h2 className="text-white text-lg sm:text-4xl">
        Someone thinks you're pretty great!
      </h2>
    </main>
        </Link>
  );
};

export default Recipient;
