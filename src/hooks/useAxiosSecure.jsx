import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await navigate("/login", {
            state: { from: window.location.pathname },
          });
        }
        return Promise.reject(error);
      }
    );
    // return () => {
    //     axiosSecure.interceptors.response.use(null, null);
    // };
  }, [navigate]);
  return <div></div>;
};

export default useAxiosSecure;
