import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../assets/Components/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path : '/login',
                element: <Login></Login>
            }
        ]
    }

])

export default router