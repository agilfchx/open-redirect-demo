import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('session'); // Remove session from local storage
    navigate('/'); // Redirect to home or login page
  };

  const isLoggedIn = !!localStorage.getItem('session'); // Check if session exists

  return (
    <nav className="bg-gray-800 py-3 px-6 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-2xl hover:text-red-500 no-underline">
          Open Redirect Lab
        </Link>
      </div>

      <ul className="flex space-x-24">
        <li>
          <Link to="/" className="text-white hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/posts" className="text-white hover:underline">Posts</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/profile" className="text-white hover:underline">Profile</Link>
          </li>
        )}
      </ul>

      <div className="flex items-center">
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="text-white hover:underline focus:outline-none w-20"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button 
              className="text-white hover:underline focus:outline-none w-20"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
