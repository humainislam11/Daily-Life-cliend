import { FaCommentAlt } from "react-icons/fa";
import {  MdOutlineDeleteOutline } from "react-icons/md";
import PropTypes from 'prop-types';


const MyListPost = ({l}) => {
           
    const {postTitle,comments} = l;
    console.log(comments,postTitle)
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className="font-bold w-56 text-[15px]">{postTitle}</td>
        

        <tb>{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaCommentAlt  /></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">{comments[1]}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p> */}
    {
      comments.map(comment => <li key={comment._id}>{comment}</li>)
    }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></tb>


        <td className="font-semibold text-lime-500">UpVote</td>
        <td className="font-semibold text-red-700">DownVote</td>
        
        <tb><MdOutlineDeleteOutline className="text-red-600 mt-3 text-[20px]" /></tb>
        
      </tr>
      
     
      
    </tbody>
  </table>
</div>
    );
};
MyListPost.propTypes = {
  l:PropTypes.array
  
}
export default MyListPost;