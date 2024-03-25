import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Layout from "../mainLayout/Layout";
import Contact from "../page/contact/Contact";

const routes = createBrowserRouter([

{
    path:'/',
    element:<Layout></Layout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        }
    ]
    
}

])
export default routes;