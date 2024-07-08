
import { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { BsCartFill } from "react-icons/bs";
const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
     }

    const NavLinks = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-2 border-solid rounded-md px-5 py-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "font-semibold"
            }
          >
            Home
          </NavLink>
    
        

         

          <NavLink
            to="/dashboardUser"
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-2 border-solid rounded-md px-5 py-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "font-semibold"
            }
          >
          <div className="flex">
            <h1>Dashboard</h1>
          <BsCartFill className="mt-1 ml-1"/>
          </div>
          </NavLink>


          
       
         



          
          
    
          
    
          
          
        </>

    )
    return (
        <div className="navbar bg-slate-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-3 w-52">
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">Daily Life</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">





        <div>
          <div className="dropdown">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  tabIndex={0}
                  title={user?.displayName}
                  className="w-[48px] rounded-3xl h-12"
                  src={user?.photoURL || "https://i.ibb.co/LRJyThk/images-1.png"}
                  alt="photo"
                />
              </div>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[15px] font-bold -ml-16">




              



                <Link className="w-full btn bg-orange-400">
                {user?.displayName || 'There are no users'}
                </Link>
              </ul>

              
            </div>
            
          </div>
          
        </div>
        {
    user?
    
    <button onClick={handleSignOut} className="btn">Sing Out</button>
    :
    <Link to="/login" className="btn font-bold">JOIN US</Link>
  }
      </div>
    </div>
    );
};

export default Navbar;