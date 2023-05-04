import React from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


const AboutUs = () => {
    return (
        <div className=' text-5xl text-center font-bold mb-20'>
            <h1 className=' text-sky-500 mb-10  '> We Provided A  Royall Foods</h1>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/assorted-indian-recipes-food-various_79295-7226.jpg?w=900")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-amber-400">Get Your Favourite FOOD</h1>
                       <p className="mb-5"> <small >We Provided A  Royall Foods </small></p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;