import React from 'react';
import Banner from '../Banner/Banner';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import AboutUs from '../AboutUS/AboutUs';
import Menu from '../Menu/Menu';
import NavBar from '../../../Layout/Navbar/NavBar';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';
import AboutUs2 from '../AboutUs2/AboutUs2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsDetails></ChefsDetails>
            <WhyChoseUs/>
            <AboutUs></AboutUs>
            <Menu></Menu>
            <AboutUs2/>

        </div>
    );
};

export default Home;