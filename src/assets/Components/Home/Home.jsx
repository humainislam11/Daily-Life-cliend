
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AllPost from "../AllPost/AllPost";
import Footer from "../Footer/Footer";

const Home = () => {

    const  posts = useLoaderData();
    return (
        <div>
            <Banner></Banner>



            <div className="text-center mt-10">
                <h1 className="text-4xl mb-7 font-bold">Share Your Story</h1>
                <p className="text-[18px] mb-6 font-semibold">Every journey is a story waiting to be told, filled with challenges that shape us and triumphs that define us.<br></br> Embrace your narrative, for its uniquely yours to share with the world.</p>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-16 max-w-6xl mx-auto">
                
        {
          posts.map(posts => <AllPost
            posts={posts}
             key={posts._id}>

             </AllPost>)
        }
       
         
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;