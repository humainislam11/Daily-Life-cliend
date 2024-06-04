import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
      
            <div className="card mb-96 w-96 mt-10 ml-10 md:ml-64 lg:ml-[490px] bg-base-100 shadow-xl">
<figure><img className="w-[40%]" src={user ?.photoURL} alt="photo" /></figure>
<div className="card-body text-center">
    <h2 className="card-title ml-[80px]">{user ?.displayName}</h2>
    
    <div className="card-actions">
    <Link to="/updateProfile" className="btn w-full bg-lime-600">Update Profile</Link>
    </div>
</div>
</div>
    </div>
    );
};

export default MyProfile;