import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home/Home";

 

 export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
 ])