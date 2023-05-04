import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import Recipes from './Recipes';


const ViewRecipes = () => {
    const [chefsData, setChefsData] = useState({})
    const [recipes,setRecipes]= useState([])
    const singleId = useParams()

    const { name, photo, yearsOfExperience, numberOfRecipes, description, likes, recipesItems } = chefsData;

    console.log(numberOfRecipes)

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                const singledata = data.find(d => d.id == singleId.id)
                setChefsData(singledata)
                setRecipes(singledata.numberOfRecipes)
            })
    }, [])
    return (
        <div>
            <div data-theme='autumn' className=' px-12 flex items-center'>
                <img className='w-1/2 h-full' src={photo} alt="" />

                <div className="hero min-h-screen">
                    <div className="hero-content  ">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold"> {name}</h1>
                            <p className="py-6 text-gray-500">{description}</p>
                            <div  >
                                <p>Experiences: {yearsOfExperience} years</p>
                                <p className='my-5'>Recipes:{recipesItems}</p>
                                <p className=' flex items-center'>Likes:<FaHeart className=' text-red-600'></FaHeart>{likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='px-12 mt-20 font-bold'>
                <h1 className=' text-5xl text-center'>My Recipes</h1>
                {
                    recipes.map( (n,index) => <Recipes key={index} n={n}></Recipes>)
                }
            </section>
        </div>
    );
};

export default ViewRecipes;