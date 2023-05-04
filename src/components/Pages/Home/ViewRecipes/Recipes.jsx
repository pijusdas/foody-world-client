import React from 'react';
import ReactStars from 'react-stars'



const Recipes = ({ n }) => {
    const { name, img, ingredients, cookingMethod, rating } = n

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-5 h-full">
            <figure><img className=' w-96 h-full' src={img} alt="Album" /></figure>
            <div className="card-body w-[40%]">
                <h2 className="card-title text-4xl">{name} </h2>
                <div className=''>
                    <p className=' text-xl'>Ingredients :</p>
                    {
                        ingredients.map(data => <p>{data}</p>)
                    }
                    <p className=' my-5
                    '> <span className=' text-xl'>Cooking Methods</span >: <br /> {cookingMethod}</p>
                    <p className=' flex items-center'>
                        <ReactStars
                            count={rating}
                            size={24}
                            color2={'#ffd700'} />
                        {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary "> Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;