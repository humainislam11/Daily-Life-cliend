import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSearch = (search) => {

   
        const axiosSecure = useAxiosSecure();
        const [searchPost, setSearchPost] =useState([]);
    
        useEffect(()=>{
            axiosSecure(`/allPost?search=${search}`)
            .then(res => setSearchPost(res.data))
        },[search])
   
};

export default useSearch;