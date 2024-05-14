import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://rns-seven.vercel.app",
  withCredentials: true,
});

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
