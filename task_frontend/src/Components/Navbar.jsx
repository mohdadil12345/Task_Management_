import  { useEffect, useState } from 'react';


import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
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
    <nav className="nav p-md-4">
      <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>

      <span onClick={handleTaskClick} className={` cursor-pointer   nav-link ${location.pathname === '/task' ? 'active' : ''}`} to="/task">Task</span>


      {access ? (
           <span onClick={logout} className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to="/signup">Logout</span>

      ) : (
        <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>

      )}



    </nav>
  );
}

export default Navbar;

