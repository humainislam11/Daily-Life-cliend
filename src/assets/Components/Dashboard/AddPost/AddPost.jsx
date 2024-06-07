import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AddPost = () => {
    
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const handleAddPost = event =>{
        event.preventDefault();
        const from = event.target;
        const postTitle = from.postTitle.value;
       
        const postDescription = from.postDescription.value; // Added longDescription

        const newPost = { postTitle,postDescription,userName:user.displayName,email:user.email,userPhoto:user.photoURL};

        console.log(newPost);

        axiosSecure.post('/post',newPost)
        .then(res =>{
            if(res.data.insertedId){
            console.log('post add to the database')
              Swal.fire({
                
                icon: "success",
                title: "Post add successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
            });
          })
    }
    return (
        <div className="bg-base-100 px-4 sm:px-8 md:px-16 lg:px-24 py-8 rounded-xl max-w-6xl mx-auto">
             <Helmet>
            <title>Daily Life || AddPost</title>
          </Helmet>

            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-7 font-bold"> Add Post</h1>
                <p className="text-sm lg:text-base mb-4 lg:mb-6 font-semibold">I love to share creative fun, silly stories, cute kid pictures and some genuine recommendations. I live a balanced and busy life working from home, and sharing.</p>
            </div>

            <form onSubmit={handleAddPost}>

                <div className="mb-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Post Title</span>
                        </label>
                        <input type="text" placeholder="Blog Title" name="postTitle" className="input input-bordered w-full required" />
                    </div>

                   

                </div>

                

              
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-[17px] text-lime-600 font-semibold">Post Description</span>
                    </label>
                    <textarea name="postDescription" placeholder="Add post description" className="input input-bordered w-full h-40"></textarea>
                </div>

                <input type="submit" value=" Add Post" className="btn btn-block mt-4 lg:mt-7 text-white bg-lime-700" />
            </form>
        </div>
    );
};

export default AddPost;