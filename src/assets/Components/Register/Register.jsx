import { useContext, useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import photo from '../../../../public/9545165.png'
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic();



    const {createUser} = useContext(AuthContext);
  
    const [registerError, setRegisterError] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const handleRegister = e =>{
      
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const name = from.get('name')
        
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');
        console.log(name,photo,email,password);

        setRegisterError('')
        if(password.length < 6){
         setRegisterError('Password should be at least 6 characters or longer ');
         return;
        }
        else if (!/[A-Z]/.test(password)){
     setRegisterError('Your Password should have at least one Upper case characters.');
     return;
        }
        else if (!/[a-z]/.test(password)){
          setRegisterError('Your Password should have at least one Lower case characters.');
          return;
        }
        
        createUser(email,password)
    .then( () => {
      const userInfo = {
        name : name,
        email : email,
        photo : photo,
      }
      axiosPublic.post('/users',userInfo)
      .then(res =>{
        if(res.data.insertedId){
        console.log('user add to the database')
          Swal.fire({
            
            icon: "success",
            title: "Register successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      
     
      
      
    //   updateUserProfile(name,photo)
    //   .then(()=>{
        
    //   })
      
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
      setRegisterError(error.message)
    })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
        
     <div className="hero-content flex-col lg:flex-row">
       <motion.div animate={{
                    scale: [0.5, 1, 1, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                   
                    repeatDelay: 1
                  }} >
       <img src={photo} className="" />
       </motion.div>
       <div>
       <div className="w-[470px] lg:w-full">
     <div className="hero min-h-screen bg-base-100">
<div className="hero-content flex-col">
<div className="text-center">
<h1 className="text-5xl font-bold">Register now!</h1>
</div>
<div className="card shrink-0 w-full max-w-sm border  bg-base-100">
<form onSubmit={handleRegister}  className="card-body">
  
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
   <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required/>
 </div>


 <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="email" placeholder="email" name="email" className="input input-bordered" required />
 </div>

 

 <div className="form-control">
   <label className="label">
     <span className="label-text">Password</span>
   </label>
   <div className="flex">
   <input 
     type={ showPassword ? "text" : "password"}
     name="password"
     placeholder="password"
     className="input input-bordered w-[320px]"
     required />
     <span className="-ml-7 mt-3 text-[22px]" onClick={()=>{ setShowPassword(!showPassword)}}>
       {
         showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
       }
     </span>
   </div>
   
   <label className="label">
     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
   </label>
 </div>
 {
     registerError && <p className="text-red-700 text-[14px]">{registerError}</p>
 }
 <div className="form-control mt-6">
   <button className="btn btn-primary">Register</button>
 </div>
</form>

<p className="text-[14px] ml-8 mb-6">Already have an Account? <Link className="text-blue-600" to='/login'>Login..</Link> </p>
</div>
</div>
</div>
 </div>
       </div>
     </div>
   </div>
    );
};

export default Register;