import React, { useState } from 'react';
import ReactStars from 'react-stars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipes = ({ n }) => {
    const [disable,setDisable] = useState('')
    const { name, img, ingredients, cookingMethod, rating } = n;

    const handleFavourite =()=>{
        toast("Added Favourite!")
        setDisable('disabled:opacity-75')
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-5 h-full">
            <figure><img className=' w-96 h-full' src={img} alt="Album" /></figure>
            <div className="card-body w-[40%]">
                <h2 className="card-title text-4xl">{name} </h2>
                <div className=''>
                    <p className=' text-2xl'>Ingredients :</p>
                    {
                        ingredients.map(data => <p>{data}</p>)
                    }
                    <p className=' my-5
                    '> <span className=' text-2xl'>Cooking Methods</span >: <br /> {cookingMethod}</p>
                    <p className=' flex items-center'>
                        <ReactStars
                            count={rating}
                            size={24}
                            color2={'#ffd700'} />
                        {rating}</p>
                </div>
                <div className={`card-actions justify-end ${disable}`}>
                    <button onClick={handleFavourite} className={`btn btn-primary `} > Favorite</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;