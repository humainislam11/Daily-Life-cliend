import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AdminProfile = () => {
    const {user} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();
    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
            
        }
        
    });
    // const {name} = users;
    console.log(users);



    const [list, setList] = useState([]);
   
   useEffect( ()=>{
     fetch(`http://localhost:5000/allPost/${user?.email}`)
     .then(res => res.json())
     .then(data => setList(data))
   },[user?.email])
   
    return (
        <div>

            <div className="bg-lime-400 h-10 grid grid-cols-3">
                <h1 className="font-semibold pt-1 text-xl ml-3">Total Users : {users.length}</h1>


                {/* {
                    list.map(l => <h1 key={l._id}>Admin Post : {l.length}</h1>)
                } */}

                <h1 className="font-semibold pt-1 text-xl">Admin Post : {list.length} </h1>



            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="font-semibold bg-blue-500" onClick={()=>document.getElementById('my_modal_1').showModal()}>comments..</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    
    {
         list.map(comment => <li className="" key={comment._id}>{comment.comments}</li>)
    }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>



                {/* {
                    list.map(comment => <li key={comment._id}>{comment.comments}</li>)
                }
                <h1>Numbers of Comment : {list.comments} </h1> */}
            </div>
      
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

export default AdminProfile;