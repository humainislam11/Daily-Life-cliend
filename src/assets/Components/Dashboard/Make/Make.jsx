import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Make = () => {


    const axiosSecure = useAxiosSecure();
    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
            
        }
        
    });
    // const {name} = users;
    console.log(users)

    
    return (
        <div>
            

            <table className="table">
    {/* head */}
    <thead className="bg-lime-500">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th className="">Photo</th>
        <th className="">Title</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
          
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <tb className=''>
        <img className="w-12 h-12" src={user.photo}></img>
          </tb>
        <td className="">
        
        </td>
       
          </tr>
         
          
          )
      }
     
      
    </tbody>
    {/* foot */}
    
    
  </table>
        </div>
    );
};

export default Make;