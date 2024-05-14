import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://rns-seven.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
