import { Link } from "react-router-dom";

const AboutUs2 = () => {
    return (
        <div className=" bg-slate-50 px-16 py-16">
            <h1 className="text-center text-5xl font-bold text-sky-500  py-16">About Us</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center">
                <img className=" shadow-2xl shadow-slate-500 rounded-2xl" src="https://i.ibb.co/kQJwz7K/pexels-jane-doan-892649.jpg" alt="" />

                <div className=" border-s-4 text-center border-gray-200 hover:border-sky-400 h-72 ps-8 hover:transition-all hover:delay-300">
                    <h1 className=" text-2xl hover:text-sky-500 text-start">PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS</h1>

                    <p className=" font-semibold text-gray-400 my-8 text-start">Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>

                    <Link  to={'/aboutUs'} className=" w-32 text-center border-b-2 hover:text-sky-500 hover:textarea-md transition-all border-sky-400 px-5 py-2 hover:border-2 hover:rounded-2xl hover:shadow-xl hover:shadow-sky-400 hover:font-bold"> Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs2;