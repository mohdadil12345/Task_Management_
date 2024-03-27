import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [access, setAccess] = useState(localStorage.getItem("logintoken"));
  const navigate = useNavigate();

  useEffect(() => {
    setAccess(localStorage.getItem("logintoken"));
  }, []); 
  const handleTaskClick = () => {
    if (access) {
      navigate("/task");
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("logintoken");
    setAccess(null); 
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <span className='text-white font-bold' onClick={handleTaskClick}>Task</span>
      {access ? (
        <span className='text-white' onClick={logout}>Logout</span>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </div>
  );
}

export default Navbar;
