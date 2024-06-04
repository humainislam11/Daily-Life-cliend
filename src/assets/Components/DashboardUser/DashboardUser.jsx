import { BsCartFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const DashboardUser = () => {
    return (
        <div className="flex max-w-6xl mx-auto">
           <div className="w-64 bg-orange-400 min-h-screen">
            <ul className="menu font-bold">


            <li className="mt-4"><NavLink to='/dashboardUser/myProfile'><FaHouseUser />My Profile</NavLink></li>

                <li className="mt-4"><NavLink to='/dashboardUser/addPost'><IoMdAddCircle />Add Post</NavLink></li>

                
                <li className="mt-4"><NavLink to='/dashboardUser/myPost'><BsCartFill></BsCartFill> My Post</NavLink></li>
            </ul>
           </div>
       {/* ////////// */}
           <div className="flex-1">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashboardUser;