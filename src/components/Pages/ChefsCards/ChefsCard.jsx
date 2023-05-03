import React from 'react';

const ChefsCard = ({ chef }) => {
    const { name, photo, yearsOfExperience, numberOfRecipes, likes } = chef
    return (
        <div className="card card-compact w-full bg-base-100  shadow-2xl">
            <figure><img className=' min-h-full' src= {photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title "> {name}</h2>
                <p> Exeriences: {yearsOfExperience} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;