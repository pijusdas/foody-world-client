import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home/Home";
import LoginLayOut from "../components/LoginLayout/LoginLayOut";
import Registration from "../components/LoginLayout/Registration";
import ViewRecipes from "../components/Pages/Home/ViewRecipes/ViewRecipes";
import PrivateRoute from "./PrivateRoutes";
import Blogs from "../components/Pages/Home/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";

 

 export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {   path: '/login',
                element: <LoginLayOut></LoginLayOut>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path:'recipes/:id',
                element:<PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
                 
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
 ])