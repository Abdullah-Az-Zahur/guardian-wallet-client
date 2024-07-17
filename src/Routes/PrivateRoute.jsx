import React, { Children } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = () => {
  const { user, loading, setLoading } = useAuth();
  const location = useLocation();
  console.log(user)

  setLoading(true)

  if (loading) return <div>Loading...</div>;
  if (user) return Children
  return <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
};

PrivateRoute.propTypes = {
    Children: PropTypes.element,
  }
  

export default PrivateRoute;
