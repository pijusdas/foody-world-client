import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipes = () => {
    const [chefsData,setChefsData]= useState({})
    const singleId = useParams()

    const{name,photo,yearsOfExperience,numberOfRecipes}= chefsData



    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data =>{
            const singledata = data.find(d => d.id== singleId.id)
            setChefsData(singledata)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ViewRecipes;