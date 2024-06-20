import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import photo from "../../../../public/pngtree-password-and-login-device-security-system-vector-picture-image_8443286.png"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";



// import { Helmet } from "react-helmet-async";

// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

const Login = () => {


  ///google login
  // const auth = getAuth();
  // const provider = new GoogleAuthProvider()
  const axiosPublic = useAxiosPublic();
  const {signIn,googleLogin,githubLogin} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
          console.log(result.user);
         
          navigate(location?.state ? location?.state : '/');

          Swal.fire({
            
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        })
        .catch(error =>{
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect password!",
            
          });
        });
  }


    const handleGoogle = () =>{
      googleLogin()
      .then( result =>{
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
         }
         axiosPublic.post('/users',userInfo)
         .then( res =>{
              console.log(res.data);
             
         })
         Swal.fire({
            
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error =>{
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect password!",
          
        });
      });
    }
    const handleGithub = () =>{
      githubLogin()
      .then( result =>{
        console.log(result.user);
        Swal.fire({
            
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error =>{
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect password!",
          
        });
      })
    }
   
    return (
        <div className="hero min-h-screen bg-base-100">
          
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="w-[600px] rounded-lg" />
          <div>
          <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm border">
      <form onSubmit={handleLogin}  className="card-body">
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
          <input type={ showPassword? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <span className="ml-[200px] -mt-9 text-[22px]" onClick={()=>{ setShowPassword(!showPassword)}}>
          {
            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
        </span>
          <label className="label mt-4">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       
      </form>
        <button onClick={handleGoogle} className="btn bg-base-100 w-[240px] ml-6"><FcGoogle /> Continue With Google</button>
        <button onClick={handleGithub} className="btn bg-base-100 w-[240px] ml-6 mt-2"><FaGithub></FaGithub>Continue With Github</button>
      <p className="text-[14px] ml-8 mb-6">Do not have an Account <Link className="text-blue-600" to='/register'>Register..</Link> </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    );
};

export default Login;