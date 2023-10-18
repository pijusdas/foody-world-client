import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from './Navbar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;