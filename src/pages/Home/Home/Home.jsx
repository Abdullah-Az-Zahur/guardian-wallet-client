import React from "react";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user, loading, setLoading } = useAuth();
 
  return (
    
    <div>
        
      <h2>Homeddfg</h2>
    </div>
  );
};

export default Home;
