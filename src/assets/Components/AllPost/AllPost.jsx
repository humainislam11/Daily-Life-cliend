
import PropTypes from 'prop-types';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

const AllPost = ({posts}) => {
    
    const {postTitle,postDescription,photo} = posts;

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

           <div className='flex font-bold gap-2'>
            <AiFillDislike className='text-xl' />
            <h1>DownVote</h1>
            </div>
           </div>
        </div>
    );
};
AllPost.propTypes={
    posts:PropTypes.array
}

export default AllPost;