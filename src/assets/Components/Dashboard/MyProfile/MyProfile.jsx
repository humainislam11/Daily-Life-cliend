import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyProfile = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <div>
      
            <div className="card mb-96 w-96 mt-10 ml-[200px]  bg-base-100 ">
<figure><img className="w-[60%]" src={user ?.photoURL} alt="photo" /></figure>
<div className="card-body text-center">
    <h2 className="card-title ml-[50px]">{user ?.displayName}</h2>
    <h1 className="font-semibold mr-8">{user.email}</h1>
    
</div>
</div>
    </div>
    );
};

export default MyProfile;