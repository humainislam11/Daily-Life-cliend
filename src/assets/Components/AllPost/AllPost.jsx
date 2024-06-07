


const AllPost = ({posts}) => {
    
    const {postTitle,postDescription} = posts;

    return (
        <div>
            <h1>{postTitle}</h1>
           <h1>{postDescription}</h1>
        </div>
    );
};

export default AllPost;