import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Tooltip } from '@mui/material';

const Header = () => {
    const { logout, user, auth } = useContext(AuthContext);



    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div  >
            <div className="navbar bg-blue-400 flex justify-between">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl font-extrabold"> FOODY WORLD</a>
                </div>
                <div className=' gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About Us</Link>

                </div>
                <div className="flex-none gap-2">
                    <Link className='btn btn-primary mr-5' to='/register'>Register</Link>
                    {
                        user ? <Link onClick={handleLogout} className=' btn btn-primary' to='/login'>Logout</Link> : <Link className=' btn btn-primary' to='/login'>Login</Link>
                    }

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className={`w-10 rounded-full`}>
                                <Tooltip title={auth?.currentUser?.displayName}><img src={auth?.currentUser?.photoURL} /></Tooltip>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;