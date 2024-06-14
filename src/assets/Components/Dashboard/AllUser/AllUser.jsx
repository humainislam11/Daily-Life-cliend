import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
            
        }
        
    })
    const handleAdmin = user =>{

    };

    const handleDeleteUser = user =>{
      
    }
    return (
        <div className=" ml-20 mt-20 bg-slate-300 p-9">
             <div className="  my-3 font-semibold">
              
                <h1 className="text-3xl">Total User:{users.length}</h1>
             </div>
             <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-lime-500">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th className="">Role</th>
        <th className="">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
          
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <tb className=''>
          <button onClick={()=> handleAdmin(user)} className=" btn btn-lg bg-orange-500"><FaUsers  className="text-white"/></button>
          </tb>
        <td className="">
        <button  onClick={ ()=> handleDeleteUser(user)} className="text-red-600 text-[20px]"><MdOutlineDelete /></button>
        </td>
       
          </tr>
         
          
          )
      }
     
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
             </div>
        </div>
    );
};

export default AllUser;