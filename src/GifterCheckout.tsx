import './gifter-checkout.css'

const GifterCheckout = () => {
    const first_name = 'fName';
    const gifter = 'gifter name';
    const message = 'We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…';

    return (
        <div className="w-screen h-auto flex items-center justify-center flex-col gap-5 mt-5">
            <p>Preview:</p>
            <div className="flex flex-col border rounded-md p-10 w-1/4 justify-center items-center theme-image">
                <p>{first_name +','}</p>
                <p className='my-3'>{message}</p>
                <p>{ gifter }</p>
            </div>

        </div>
    )
};

export default GifterCheckout;