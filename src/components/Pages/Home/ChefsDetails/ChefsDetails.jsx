import React, { useEffect, useState } from 'react';
import ChefsCard from '../../ChefsCards/ChefsCard';

const ChefsDetails = () => {
    const [chefsData, setChefsData] = useState([])
    console.log(chefsData)

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChefsData(data))
    }, [])
    return (
        <div  data-theme='corporate' className=' py-28'>
            <h1 className=' text-center  text-3xl font-bold'>Meet Our Special Chef's</h1>
            <div className='px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    chefsData.map(chef => <ChefsCard key={chef.id}
                        chef={chef}></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default ChefsDetails;