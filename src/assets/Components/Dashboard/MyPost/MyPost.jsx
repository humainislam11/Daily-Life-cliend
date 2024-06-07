import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyListPost from "../MyListPost/MyListPost";





const MyPost = () => {
    
    const {user} = useContext(AuthContext);

    const [list, setList] = useState([]);
   
   useEffect( ()=>{
     fetch(`http://localhost:5000/allPost/${user?.email}`)
     .then(res => res.json())
     .then(data => setList(data))
   },[user?.email])
    return (
        <div>
         <div className="text-center">
                <h1 className="text-4xl mb-7 font-bold">My List</h1>
                <p className="text-[18px] mb-6 font-semibold">Embark on a journey through the heart of history, where every corner tells a story, every monument whispers <br /> secrets of the past, and every vista promises unforgettable memories etched in time.</p>
            </div>
         <div className=' max-w-6xl mx-auto'>
         {
             list.map(l => <MyListPost l={l} key={l._id}></MyListPost>)
            }
        
       
     </div>
       </div>
    );
};

export default MyPost;