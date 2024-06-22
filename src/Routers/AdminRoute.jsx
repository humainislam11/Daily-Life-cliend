import { useContext } from "react";
import useAdmin from "../assets/Components/hooks/useAdmin";
import { AuthContext } from "../assets/Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = (children) => {
    const {user,loading} = useContext(AuthContext);
    const {isAdmin, isAdminLoading}= useAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg ml-[650px]"></span>
       }
   
       if(user && isAdmin){
         return children;
       }
       return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default AdminRoute;