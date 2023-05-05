import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';

const Registration = () => {
    const {creatUser} = useContext(AuthContext)
    const [error ,setError] = useState('')

    const handleCreatUser= event =>{
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

       if(password.length < 6){
        return setError('Password should be atleast 6 characters')
       }

        creatUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
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

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-emerald-300">
                        <Form  onSubmit={handleCreatUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn glass">Register</button>
                            </div>
                           { error && <p className=' bg-white'><small className=' border rounded-xl text-red-600 font-bold'>{error}</small></p>}
                            <p className=' mt-5 text-white'><small>Already Have an account? <Link className=' bg-red-500 rounded p-1'  to='/login'>Please Login</Link></small></p>
                        </Form>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;