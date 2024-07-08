
import Navbar from "../assets/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Layout;