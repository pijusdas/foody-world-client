import React from 'react';
import banner from '../../../../assets/42794.jpg'

const Banner = () => {
    return (
<div className="hero min-h-screen" style={{ backgroundImage: `url( ${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-blue-800 font-bold">Delicious Food Is My Passion</h1>
      <p className="mb-5 text-xl font-bold"> We Bring Professional Chefs To Your Home To Prepare Delicious, Customized Meals At A Fraction Of The Cost </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};
            // <div className='flex sm:mb-0 justify-end pr-5 pt-36'>
            //     <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600'>Delicious <br /> Food Is <br /> My Passion</h1>
              
            // </div>

export default Banner;