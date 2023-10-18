import React from 'react';
import Banner from '../Banner/Banner';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import AboutUs from '../AboutUS/AboutUs';
import Menu from '../Menu/Menu';
import NavBar from '../../../Layout/Navbar/NavBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsDetails></ChefsDetails>
            <AboutUs></AboutUs>
            <Menu></Menu>

        </div>
    );
};

export default Home;