import { BsCartFill } from "react-icons/bs";
import { FaHouseUser, FaRegUserCircle } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { IoMdAddCircle } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const DashboardAll = () => {
    const isAdmin = true;
    return (
        <div className="flex max-w-6xl mx-auto">
           <div className="w-64 bg-orange-400 min-h-screen">
            <ul className="menu font-bold">


            {
                isAdmin ? <>
                <li className="mt-4"><NavLink to='/dashboardUser/adminProfile'><FaHouseUser />Admin Profile</NavLink></li>

     <li className="mt-4"><NavLink to='/dashboardUser/allUser'><FaRegUserCircle /> Manage Users</NavLink></li>


      <li className="mt-4"><NavLink to='/dashboardUser/reportedComments'><GoReport />Reported Comments
      </NavLink></li>

      <li className="mt-4"><NavLink to='/dashboardUser/      makeAnnouncement'><TfiAnnouncement /> Make Announcement
      </NavLink></li>
                </>
                :
                <>
                <li className="mt-4"><NavLink to='/dashboardUser/myProfile'><FaHouseUser />My Profile</NavLink></li>

<li className="mt-4"><NavLink to='/dashboardUser/addPost'><IoMdAddCircle />Add Post</NavLink></li>


<li className="mt-4"><NavLink to='/dashboardUser/myPost'><BsCartFill></BsCartFill> My Post</NavLink></li></>
            }
            </ul>
           </div>
       {/* ////////// */}
           <div className="flex-1">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashboardAll;