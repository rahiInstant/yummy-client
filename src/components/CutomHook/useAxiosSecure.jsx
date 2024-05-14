import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
// https://rns-seven.vercel.app
const useAxiosSecure = () => {
  const something = useContext(AuthContext);
  const logOut = something?.logOut;

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          logOut()
            .then(() => {
              <Navigate to="/login"></Navigate>;
            })
            .catch(() => "");
        }
      }
    );
  }, [logOut]);
  return axiosSecure;
};

export default useAxiosSecure;
