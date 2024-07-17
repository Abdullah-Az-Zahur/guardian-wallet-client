import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
  };


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    logOut,
    // Add more methods as needed
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    // Array of children.
    children: PropTypes.array,
  };

export default AuthProvider;
