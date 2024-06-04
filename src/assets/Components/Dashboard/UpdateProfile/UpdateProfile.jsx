import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext);
    const handleUpdate = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const name = from.get('name')
        const photo = from.get('photo');
        console.log(name,photo)
        updateUserProfile(name,photo)
        .then(window.location.reload())
        .catch()

    }
    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-10 md:ml-64 lg:ml-[460px]">
       
           <form onSubmit={handleUpdate}  className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" />
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered"/>
      </div>



      <div className="form-control mt-6">
        <button className="btn btn-primary">UpDate Profile</button>
      </div>
     
    </form>
      </div>
    );
};

export default UpdateProfile;