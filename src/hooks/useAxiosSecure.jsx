import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await logOut();
          navigate("/login", {
            state: { from: window.location.pathname },
          });
        }
        return Promise.reject(error);
      }
    );
    // return () => {
    //     axiosSecure.interceptors.response.use(null, null);
    // };
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
