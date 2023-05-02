import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  >
            <div className="navbar bg-blue-400 flex justify-between">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl font-extrabold"> FOODY WORLD</a>
                </div>
                <div className=' gap-5'>
                    <Link>Home</Link>
                    <Link>Blogs</Link>
                    <Link>About Us</Link>

                </div>
                <div className="flex-none gap-2">
                    <Link className='btn btn-primary mr-5' to='/register'>Register</Link>
                    <Link className=' btn btn-primary' to='/login'>Login</Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;