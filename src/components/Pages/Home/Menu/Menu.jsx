import React from 'react';
import { BiFoodMenu,BiLayer,BiFoodTag } from "react-icons/bi";

const Menu = () => {
    return (
        <div className=' mb-20'>
             <h1 className=' text-center text-sky-500  text-5xl font-bold mb-12'>Purchase Your Favourite Food</h1>
            <div className=' lg:flex gap-8 sm:px-5'>
                <div className='lg:w-[50%]'>
                    <img src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=900&t=st=1683184456~exp=1683185056~hmac=0c9af45a6eecc46dbab50c15eab985fa7d0d876f9c4e5240d04c12cbdeeaec81" alt="" />
                </div>
                <div>
                    <h1 className=' text-5xl mb-10'>Menus
                        <br />
                        <hr className=' mt-5 bg-amber-200 h-1 w-1/4 ' />
                    </h1>

                    <p className=' mb-16 text-gray-600'>Browse our traditional menus or let us create <br />
                        something new for you.</p>

                    <div className=' flex gap-4 items-center'>
                        <BiFoodMenu className=' h-10 text-blue-300 w-10 rounded'/>
                        <div>
                            <h1 className=' font-bold'>Diner Menu</h1>
                            <p className=' text-gray-500'>Our menu features time honored favorites that have come to define the perfect Park City dining experience.</p>
                        </div>
                    </div>
                    <div className=' flex gap-4 items-center my-5'>
                        <BiLayer className=' h-10 w-10 text-blue-300 rounded'/>
                        <div>
                            <h1 className=' font-bold'>Brance Menu</h1>
                            <p className=' text-gray-500'>Savor the stuffed French toast with warm syrup or delight in a classic eggs benedict with rich hollandaise.</p>
                        </div>
                    </div>
                    <div className=' flex gap-4 items-center'>
                        <BiFoodTag className=' h-10 w-10 text-blue-300 '/>
                        <div>
                            <h1 className=' font-bold'>Vegan & Gluten Free Menu</h1>
                            <p className=' text-gray-500'>100% vegan, vegetarian & gluten free cuisine from our kitchen to your table.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;