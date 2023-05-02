import React from 'react';
import { Form } from 'react-router-dom';

const Registration = () => {
    return (
        <div data-theme='aqua'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <h1 className='text-3xl font-bold'>Please Register</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form   className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </Form>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;