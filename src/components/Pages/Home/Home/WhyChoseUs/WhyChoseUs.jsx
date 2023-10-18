import { GiCakeSlice } from "react-icons/gi";

const WhyChoseUs = () => {
    return (
        <div className=" px-12">
            <h1 className="text-center text-sky-500  text-5xl font-bold mb-12">WHY CHOOSE US</h1>
            <div className=" flex justify-between items-center">
                <div>
                    <div className=" flex gap-5">
                        <div>
                            <h1 className=" text-lg font-bold tex">QUALITY PRODUCTS</h1>
                            <p className=" text-end">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                        </div>
                        <GiCakeSlice />
                    </div>
                    <div className=" flex gap-5">
                        <div>
                            <h1 className=" text-lg font-bold tex">QUALITY PRODUCTS</h1>
                            <p className=" text-end">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                        </div>
                        <GiCakeSlice />
                    </div>
                </div>
                <div>
                    <div className=" flex gap-5">
                        <div>
                            <h1 className=" text-lg font-bold tex">QUALITY PRODUCTS</h1>
                            <p className=" text-start">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                        </div>
                        <GiCakeSlice />
                    </div>
                    <div className=" flex gap-5">
                        <div>
                            <h1 className=" text-lg font-bold tex">QUALITY PRODUCTS</h1>
                            <p className=" text-start">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                        </div>
                        <GiCakeSlice />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;