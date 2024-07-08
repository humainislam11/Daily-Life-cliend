import { BsCartFill } from "react-icons/bs";
import { FaHouseUser, FaRegUserCircle } from "react-icons/fa";

import { IoMdAddCircle } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardAll = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <div className="w-full md:w-64 bg-orange-400 md:h-10 lg:min-h-screen">
                <ul className="menu font-bold flex flex-col md:block">
                    {isAdmin ? (
                        <>
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/adminProfile'>
                                    <FaHouseUser /> Admin Profile
                                </NavLink>
                            </li>
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/allUser'>
                                    <FaRegUserCircle /> Manage Users
                                </NavLink>
                            </li>
                            
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/makeAnnouncement'>
                                    <TfiAnnouncement /> Make Announcement
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/myProfile'>
                                    <FaHouseUser /> My Profile
                                </NavLink>
                            </li>
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/addPost'>
                                    <IoMdAddCircle /> Add Post
                                </NavLink>
                            </li>
                            <li className="mt-4">
                                <NavLink to='/dashboardUser/myPost'>
                                    <BsCartFill /> My Post
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardAll;
