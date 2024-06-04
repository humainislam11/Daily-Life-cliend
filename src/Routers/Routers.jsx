import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../assets/Components/Login/Login";
import Register from "../assets/Components/Register/Register";
import Home from "../assets/Components/Home/Home";
import DashboardUser from "../assets/Components/DashboardUser/DashboardUser";
import PrivateRoot from "../assets/Components/PrivateRoot/PrivateRoot";

import AddPost from "../assets/Components/Dashboard/AddPost/AddPost";
import MyPost from "../assets/Components/Dashboard/MyPost/MyPost";
import MyProfile from "../assets/Components/Dashboard/MyProfile/MyProfile";
import UpdateProfile from "../assets/Components/Dashboard/UpdateProfile/UpdateProfile";






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
            },{
                path: '/',
                element: <Home></Home>
            },{
                path: '/updateProfile',
                element: <PrivateRoot><UpdateProfile></UpdateProfile></PrivateRoot>
            },{
                path: '/dashboardUser',
                element: <PrivateRoot><DashboardUser></DashboardUser></PrivateRoot>,
                children: [
                    {
                        path: 'myProfile',
                        element: <MyProfile></MyProfile>
                    },{
                        path: 'addPost',
                        element:<AddPost></AddPost>
                    },{
                        path: 'myPost',
                        element: <MyPost></MyPost>
                    }
                ]
            }
            
        ]
    }

])

export default router