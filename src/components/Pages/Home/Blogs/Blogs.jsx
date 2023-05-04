import React from 'react';
import ReactToPdf from "react-to-pdf";

const Blogs = () => {
    const ref = React.createRef();
    return (
        <div className='my-20'>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div className=' bg-sky-300 w-[70%] mx-auto p-10 rounded-lg shadow-2xl mb-8'>
                <h1 className=' text-xl font-bold mb-5'>Tell us the differences between uncontrolled and controlled components ?</h1>
                <p className=' mb-3'><b>Controlled</b>: A controlled functional component is a component that receives its current value and update callback via props. For example, consider a simple form that accepts an email address and a password:
                </p>
                <p><b>Uncrontrolled</b>:An uncontrolled functional component is a component that maintains its own internal state</p>
            </div>
            <div className=' bg-sky-300 w-[70%] mx-auto p-10 rounded-lg shadow-2xl mb-8'>
                <h1 className=' text-xl font-bold mb-5'>How to validate React props using PropTypes ?
                </h1>
                <p className=' mb-3'>Add a propTypes object to your component class, with keys for each prop and their corresponding PropTypes. When a prop fails validation, React will log a warning in the console. You can also customize the error message by adding a propType message to your PropTypes .
                </p>

            </div>
            <div className=' bg-sky-300 w-[70%] mx-auto p-10 rounded-lg shadow-2xl mb-8'>
                <h1 className=' text-xl font-bold mb-5'>
                    Tell us the difference between nodejs and express js.</h1>
                <p className=' mb-3'><b>Node js</b> Is a runtime environment for executing JavaScript code outside of a browser . <br /><b> Express js</b> Is a web framework built on top of Node.js for building web applications.
                </p>

            </div>
            <div className=' bg-sky-300 w-[70%] mx-auto p-10 rounded-lg shadow-2xl'>
                <h1 className=' text-xl font-bold mb-5'>What is a custom hook, and why will you create a custom hook?</h1>
                <p className=' mb-3'>A custom hook is a reusable function in React that combines built-in hooks and JavaScript functions to provide specific functionality. They can simplify and improve the reusability and testability of your code. You might create a custom hook to abstract away complex logic from your components, to avoid code duplication, and to provide a cleaner, more modular code structure.
                </p>

            </div>
        </div>
    );
};

export default Blogs;