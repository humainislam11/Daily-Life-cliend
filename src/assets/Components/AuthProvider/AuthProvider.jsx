import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import PropTypes from 'prop-types';
import { useState } from "react";

import {  GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
///google
const googleProvider = new GoogleAuthProvider();
//github
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //upDate profile   

       const updateUserProfile = (name,photo) => {
       
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          });
    };


    
////////google login
    const googleLogin = () =>{
      return  signInWithPopup(auth, googleProvider);
    };

    ////github login
    const githubLogin = () =>{
      return  signInWithPopup(auth, githubProvider);
    }
    
     const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
   
   
    useEffect( () => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);

    const authData = {
     user,
     loading,
     createUser,
     signIn,
     logOut,
     updateUserProfile,
     googleLogin,
     githubLogin
    
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.array
}
export default AuthProvider;