import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-mu-three.vercel.app',
  });
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;