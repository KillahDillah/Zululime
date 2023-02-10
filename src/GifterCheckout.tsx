import './gifter-checkout.css'
import preview from './assets/preview.png';

const GifterCheckout = () => {
    return (
        <div className="w-screen h-auto flex items-center justify-center flex-col gap-5 mt-5">
            <p>Preview:</p>
            <img src={preview} alt="preview" className='w-1/2'/>
        </div>
    )
};

export default GifterCheckout;