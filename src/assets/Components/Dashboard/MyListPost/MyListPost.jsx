import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";



const MyListPost = ({l}) => {
           
    const {postTitle} = l;
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className="font-bold w-56 text-[15px]">{postTitle}</td>
        <td className="font-semibold text-lime-500">UpVote</td>
        <td className="font-semibold text-red-700">DownVote</td>
        <tb><MdOutlineDeleteOutline className="text-red-600 mt-3 text-[20px]" /></tb>
        
      </tr>
      
     
      
    </tbody>
  </table>
</div>
    );
};

export default MyListPost;