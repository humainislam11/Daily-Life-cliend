
import { FaSearch } from 'react-icons/fa';
import video from '../../../../public/201766-916357972_large.mp4'
import {  useState } from 'react';
import useSearch from '../hooks/useSearch';




const Banner = () => {
  const [search, setSearch] = useState('');

  const searchPost = useSearch(search);
   
  // useEffect(()=>{
  //   fetch(`http://localhost:5000//allPost`)
  //   .then(res => res.json())
  //   .then(data => setSearch(data))
  // },[])

  const handleSearch = e =>{
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    setSearch(search)
  }

  
    return (
        <div className="hero lg:max-w-6xl mx-auto ">
           
            <video className='' src={video} autoPlay loop muted></video>
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
            
        <div className="">
                {/* <h1 className="text-4xl mb-7 font-bold">OUR BLOG</h1>
                <p className="text-[18px] mb-6 font-semibold">I love to share creative fun, silly stories, cute kid pictures and some genuine recommendations. <br />I live a balanced and busy life working from home, and sharing.</p> */}
              <div className='lg:pr-[590px] lg:-mt-36'>
                <h1 className='font-semibold text-2xl text-base-100'>OUR POST</h1>
                <h1 className='text-4xl font-bold text-base-100'>Search a Post</h1>
              </div>
              <div>


                <form onSubmit={handleSearch}>
                <div className="form-control">
        
          <input type="search" placeholder="Search a Post" name="search" className="input input-bordered mt-5" required />
          <button className='btn ml-[150px] lg:ml-[700px] -mt-12 lg:-mt-12 bg-lime-400 hover:bg-lime-400'><FaSearch />Search</button>
        </div>
                </form>


              </div>

            






            </div>
        </div>
      </div>
    );
};

export default Banner;