import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center mt-10">
            <div className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-base-100 shadow-md">
                <figure className="flex justify-center p-4">
                    <img className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 rounded-full" src={user?.photoURL} alt="photo" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <h1 className="font-semibold">{user.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
