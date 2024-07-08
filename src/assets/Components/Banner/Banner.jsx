
import video from '../../../../public/201766-916357972_large.mp4'

const Banner = () => {
  
    return (
        <div className="hero lg:max-w-6xl mx-auto relative">
            <video className="w-full" src={video} autoPlay loop muted></video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="hero-content text-neutral-content relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="">
                        <h1 className="text-2xl lg:text-5xl font-bold text-base-100">Share Your Story</h1>
                        <p className="font-semibold mt-5 text-base-100">Every journey is a story waiting to be told, filled with challenges that shape us and triumphs that define us. Embrace your narrative, for Its uniquely yours to share with the world.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
