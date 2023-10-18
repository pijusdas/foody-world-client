import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContackUs = () => {
    const form = useRef();

    const sentEamil = e => {
        e.preventDefault();
        emailjs.sendForm('service_onmfoqs', 'template_gl2yru8', form.current, 'SYlyyGZZUUZ7Q6ERS')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            toast.info('🦄 Email Sent!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }, (error) => {
            console.log(error.text);
        });
        
    }
    return (
        <div className=' bg-gray-200 py-20'>
            <h1 className=' text-sky-500 font-bold text-3xl text-center '>Conenct With Us</h1>

            <div className=" bg-gray-100 p-20">
              
                <form ref={form} onSubmit={sentEamil} className='  w-10/12 m-auto flex flex-col gap-7'>
                    <input className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' type="text" name="name" placeholder='Name' />

                    <input className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' type="email" name="email" placeholder='Email' />

                    <textarea className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' placeholder='Write your message' name="message" id="" cols="" rows=""></textarea>
                    <input className=' text-lg font-bold hover:bg-black text-sky-500 w-52 border border-b-4 border-sky-400 m-auto py-2 borde bg-slate-800' type="submit" value="Sent Message" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContackUs;






