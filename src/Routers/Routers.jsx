import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../assets/Components/Login/Login";
import Register from "../assets/Components/Register/Register";
import Home from "../assets/Components/Home/Home";

import PrivateRoot from "../assets/Components/PrivateRoot/PrivateRoot";

import AddPost from "../assets/Components/Dashboard/AddPost/AddPost";
import MyPost from "../assets/Components/Dashboard/MyPost/MyPost";
import MyProfile from "../assets/Components/Dashboard/MyProfile/MyProfile";
import UpdateProfile from "../assets/Components/Dashboard/UpdateProfile/UpdateProfile";

import DashboardAll from "../assets/Components/DashboardAll/DashboardAll";
import AllUser from "../assets/Components/Dashboard/AllUser/AllUser";
import AdminProfile from "../assets/Components/Dashboard/AdminProfile/AdminProfile";
import ReportedComments from "../assets/Components/Dashboard/ReportedComments/ReportedComments";
import Make from "../assets/Components/Dashboard/Make/Make";






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
                element: <Home></Home>,
                loader : ()=> fetch('https://y-mu-three.vercel.app/allPost')
            }
           
            ,{
                path: '/updateProfile',
                element: <PrivateRoot><UpdateProfile></UpdateProfile></PrivateRoot>
            },{
                path: '/dashboardUser',
                element: <PrivateRoot><DashboardAll></DashboardAll></PrivateRoot>,
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
                    },{
                        path: 'allUser',
                        element: <AllUser></AllUser>
                    },{
                        path: 'adminProfile',
                        element: <AdminProfile></AdminProfile>
                    },{
                        path: 'reportedComments',
                        element: <ReportedComments></ReportedComments>
                    },{
                        path: 'makeAnnouncement',
                        element: <Make></Make>
                    }
                ]
            }
            
        ]
    }

])

export default router