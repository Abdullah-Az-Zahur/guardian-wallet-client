import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const [isEmail, setIsEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  // const [loading, setLoading] = useState(false);

  let { user, setUser, loading, setLoading } = useAuth();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const { mutateAsync } = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosSecure.post(`/login`, userData);
      return data;
    },
    onSuccess: async (data, userData) => {
      console.log("User Login Successfully");
      toast.success("User Login successfully");

      try {
        const res = await axiosSecure.get(`/user/${userData.email}`);
        user = res.data;
      } catch (err) {
        console.error("Error fetching user data:", err);
        toast.error("Error fetching user data");
      }

      setUser(user);

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      console.log(user);
    },
  });

  const handlePinChange = (e) => {
    const value = e.target.value;
    // Only allow numeric values and limit to 5 digits
    if (/^\d{0,5}$/.test(value)) {
      setPin(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pin = form.pin.value;

    try {
      setLoading(true);
      const userData = {
        email,
        pin,
      };

      await mutateAsync(userData);
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or PIN");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const toggleInput = () => {
    setIsEmail(!isEmail);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            {/* email phone toggle */}

            <div>
              <button
                onClick={toggleInput}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                {isEmail ? "Switch to Phone" : "Switch to Email"}
              </button>
              {isEmail ? (
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onBlur={(e) => setEmail(e.target.value)}
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onBlur={(e) => setPhone(e.target.value)}
                    id="phone"
                    required
                    placeholder="Enter Your Phone Number Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="pin" className="text-sm mb-2">
                  Pin
                </label>
              </div>
              <input
                type="password"
                name="pin"
                id="pin"
                value={pin}
                onChange={handlePinChange}
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
