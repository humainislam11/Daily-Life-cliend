
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AllPost from "../AllPost/AllPost";

const Home = () => {

    const  posts = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-16 max-w-6xl mx-auto">
        {
          posts.map(posts => <AllPost
            posts={posts}
             key={posts._id}>

             </AllPost>)
        }
       
         
        </div>
        </div>
    );
};

export default Home;