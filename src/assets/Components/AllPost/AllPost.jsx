
import PropTypes from 'prop-types';

import { AiFillDislike, AiFillLike } from 'react-icons/ai';


import Swal from 'sweetalert2';
// import useAxiosSecure from '../hooks/useAxiosSecure';


const AllPost = ({posts}) => {
   
//  const axiosSecure = useAxiosSecure();
//   const [post, setPost] = useState(null);
   

    
    const {postTitle,postDescription,photo,_id} = posts;
    console.log(_id)

    const handleComment = event =>{
        event.preventDefault();
        const from = event.target;
        const comment = from.comment.value;
        const addComment = {comment}
        console.log(addComment);


        fetch(`https://y-mu-three.vercel.app/allPost/${_id}`,{
            method : 'PUT',
            headers : {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(addComment)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
           
        
              Swal.fire({
                title: 'Success!',
                text: 'add Comment Successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            
          });


        //   const handleUpvote = () => {
        //     axiosSecure.put(`/post/${_id}/upvote`)
        //         .then(r => {
        //             setPost(prevPost => ({
        //                 ...prevPost,
        //                 upvotes: prevPost.upvotes + 1
        //             }));
        //         })
        //         .catch(error => {
        //             console.error('There was an error upvoting the post!', error);
        //         });

        // };

    

    }

    return (
        <div className="mt-10 border rounded-xl p-3">
           <figure><img className="h-[230px] w-[500px] rounded-xl" src={photo} alt="photo" /></figure>
           <h1 className='text-2xl font-bold mb-4 mt-3'>{postTitle}</h1>
           <h1 className='font-semibold'>{postDescription}</h1>
           <div className='flex gap-28 mt-4'>

           <div className='flex font-bold gap-2'>
            <AiFillLike className='text-xl'/>
            <h1>UpVote</h1>
           </div>

           <div  className='flex font-bold gap-2'>
            <AiFillDislike className='text-xl' />
            <h1>DownVote</h1>
            </div>
           </div>
           <form onSubmit={handleComment}>
           <div className="form-control">
                        
                        <input type="text" placeholder="Add Comment....." name="comment" className="input input-bordered mt-3 -mb-4 w-full required" />
                    </div>

                    <input type="submit" value="Add Comment" className="btn btn-block mt-4 lg:mt-7 text-white bg-lime-700" />
           </form>
        </div>
    );
};
AllPost.propTypes={
    posts:PropTypes.array
}

export default AllPost;