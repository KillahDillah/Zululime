import {Link} from 'react-router-dom';
import bg from './assets/bg.jpg';


const RecipientGiftPreview = () => {
  return (
    <div style={{ background: `url(${bg}) no-repeat fixed center` }} >
        <main className="w-screen h-screen flex items-center justify-center flex-col gap-5">
          <h1 className="text-white text-lg sm:text-4xl">
            Click your gift box below to see what Gifter got for you!
          </h1>
          <Link to={'/recipient-gift'}>
            ANIMATED BOX HERE
          </Link>
      </main>
    </div>
  );
};

export default RecipientGiftPreview;
