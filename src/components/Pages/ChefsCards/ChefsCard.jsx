import React from 'react';
import { FaHeart } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { id, name, photo, yearsOfExperience, recipesItems, likes } = chef
    return (
        <div className="card card-compact w-full bg-base-100  shadow-2xl">
            <figure>
                <LazyLoad  offset={300} width={400} threshold={0.95}>

                    <img className=' h-96 w-full' src={photo} alt="Shoes" />
                </LazyLoad>


            </figure>
            <div className='p-10'>
                <h2 className="card-title "> {name}</h2>
                <p className='text-lg mb-0'> Exeriences: {yearsOfExperience} years </p>
                <p className=' text-lg'> Recipes Items: {recipesItems}</p>
                <div className="card-actions mt-5  flex justify-between items-center">
                    <p className='flex items-center'> <FaHeart className=' text-red-600'></FaHeart>  {likes}</p>
                    <Link to={`/recipes/${id}`}>
                        <button className="btn btn-primary rounded">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;