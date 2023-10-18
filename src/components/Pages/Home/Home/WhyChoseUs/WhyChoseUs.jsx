import { GiCakeSlice, GiDeliveryDrone, GiFlowerStar, GiPayMoney } from "react-icons/gi";

const WhyChoseUs = () => {
    return (
        <div className=" px-12 mb-20">
            <h1 className="text-center text-sky-500  text-5xl font-bold mb-12">WHY CHOOSE US</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between items-center">
                <div>
                    <div className=" flex items-center justify-between gap-5 border-sky-400 border-b-2 pb-9">
                        <div>
                            <h1 className=" text-xl hover:text-sky-500 font-bold text-end mb-4 ">QUALITY PRODUCTS</h1>
                            <p className=" text-end text-gray-500">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                        </div>
                        <GiCakeSlice className=" text-9xl font-bold text-sky-500"/>
                    </div>
                    <div className=" flex items-center justify-between gap-5 pt-9">
                        <div>
                            <h1 className=" text-xl hover:text-sky-500 font-bold text-end mb-4">CATERING SERVICE</h1>
                            <p className=" text-end text-gray-500">Our bakery also provides an outstanding catering service for events and special occasions.</p>
                        </div>
                        <GiFlowerStar className=" text-9xl font-bold text-sky-500"/>
                    </div>
                </div>


                <img src="https://i.ibb.co/mTZcqHL/pexels-pixabay-434283-removebg-preview.png" alt="" />


                <div>
                    <div className=" flex items-center justify-between gap-5 border-sky-400 border-b-2 pb-9">
                        <div>
                            <h1 className=" text-xl hover:text-sky-500 font-bold text-end mb-4">ONLINE PAYMENT</h1>
                            <p className=" text-end text-gray-500">We accept all kinds of online payments including Visa, MasterCard, American Express credit cards.</p>
                        </div>
                        <GiPayMoney className=" text-9xl font-bold text-sky-500"/>
                    </div>
                    <div className=" flex items-center justify-between gap-5 pt-9">
                        <div>
                            <h1 className=" text-xl hover:text-sky-500 font-bold text-end mb-4">FREE DELIVERY</h1>
                            <p className=" text-end text-gray-500">All orders submitted by our US clients are delivered for free throughout the United States.</p>
                        </div>
                        <GiDeliveryDrone className=" text-9xl font-bold text-sky-500"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;