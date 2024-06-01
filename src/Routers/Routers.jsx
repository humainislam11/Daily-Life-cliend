import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../assets/Components/Login/Login";
import Register from "../assets/Components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path : '/login',
                element: <Login></Login>
            },{
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])

export default router