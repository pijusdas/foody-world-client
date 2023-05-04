import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';

const LoginLayOut = () => {
    const { loginWithGoogle, loginWithGithub, login } = useContext(AuthContext)
    const [error, setError] = useState('');


    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)


        if (password.length < 6) {
            return setError('Password Should be at least 6 character')
        }

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // handle google login

    const googleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // handle github login
    const githubLogin = () => {
        loginWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div data-theme='aqua'>
            <div className=" min-h-screen w-full bg-base-200">
                <div className="hero-content w-full flex-col ">
                    <h1 className='text-3xl font-bold'>Please login</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className=' bg-white'><small className=' text-red-600 font-bold'>{error}</small></p>

                        </Form>
                        <button onClick={googleLogin} className="btn glass text-white">Login With Google</button>
                        <button onClick={githubLogin} className="btn glass text-white my-5">LOgin With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayOut;