import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { data } from "autoprefixer";

const useRole = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const role = (user.role);
  

  const {  isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data.role;
    },
  });
  // console.log(data.role);

  //   Fetch user info using logged in user email

  return [role, isLoading];
};

export default useRole;
