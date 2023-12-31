import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
const NavBar = () => {
    return (
        <div className='bg-black h-24 px-16 flex justify-between items-center'>
            <div  className=' flex justify-between items-center gap-5'>
                <FaLocationArrow className='text-sky-400 text-2xl'/>
                <div className=' text-lg font-semibold text-sky-400'>
                    <h1>523 Sylvan Ave</h1>
                    <h1>Mountain View, CA 94041 USA</h1>
                </div>
            </div>

            <button className=' px-5 py-2 transition-all hover:translate-x-1 rounded-2xl hover:bg-sky-400 hover:text-white border-e-2 border-s-2 border-sky-400 font-bold text-sky-400'>Get In Touch</button>
        </div>
    );
};

export default NavBar;