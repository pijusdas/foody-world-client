import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';

const Registration = () => {
    const {creatUser} = useContext(AuthContext)

    const handleCreatUser= event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })

        console.log(name,photo,password,email)
    }
    return (
        <div data-theme='aqua'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <h1 className='text-3xl font-bold'>Please Register</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form  onSubmit={handleCreatUser} className="card-body">
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