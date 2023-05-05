import React, { useContext, useState } from 'react';
import { Form, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginLayOut = () => {
    const { loginWithGoogle, loginWithGithub, login } = useContext(AuthContext)
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (event) => {
        event.preventDefault()
        setError()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)


        if (password.length < 6) {
            return setError('Password Should be at least 6 character')
        }
        if(!email || password){
            return setError('Please provided valide email an password')
        }
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from)
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    // handle google login

    const googleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    // handle github login
    const githubLogin = () => {
        loginWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from)
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }



    return (
        <div data-theme='aqua'>
            <div className=" min-h-screen w-full  ">
                <div className="hero-content w-full flex-col ">
                    <h1 className='text-3xl font-bold'>Please login</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-emerald-300">
                        <Form onSubmit={handleLogin} className="card-body   ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  glass">Login</button>
                            </div>
                            <p className=' mt-5 text-white'><small>New To Foody World? <Link className=' bg-red-500 rounded p-1' to='/register'>Please Register</Link></small></p>
                            {error && <p className=' bg-white'><small className=' text-red-600 font-bold'>{error}</small></p>
                            }
                        </Form>
                        <button onClick={googleLogin} className="btn glass text-white">
                            <FaGoogle className=' text-2xl text-blue-950'></FaGoogle>
                            Login With Google</button>
                        <button onClick={githubLogin} className="btn glass text-white my-5"> <FaGithub className=' text-2xl text-blue-950'></FaGithub> LOgin With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayOut;