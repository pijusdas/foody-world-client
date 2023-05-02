import React from 'react';
import banner from '../../../../assets/42794.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`
            , height: '100vh',
            width: '100%',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

        }}  >
            <div className='flex justify-end pr-5 pt-36'>
                <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600'>Delicious <br /> Food Is <br /> My Passion</h1>
              
            </div>

        </div>
    );
};

export default Banner;