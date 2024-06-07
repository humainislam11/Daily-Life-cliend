

const MyListPost = ({l}) => {
           
    const {postTitle,postDescription} = l;
    return (
        <div>
            <h1>{postTitle}</h1>
        </div>
    );
};

export default MyListPost;