// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 overflow-hidden">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Open Redirect Lab</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Discover the intricacies of open redirect vulnerabilities and learn how to secure your applications effectively.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">What is Open Redirect?</h2>
          <p className="text-gray-700">
            Open redirect is a security vulnerability that allows attackers to redirect users to untrusted sites.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">How to Prevent It?</h2>
          <p className="text-gray-700">
            Implement proper validation of redirect URLs by using a whitelist of allowed domains and removing unnecessary parameters. Additionally, consider enforcing a fixed domain for redirects.
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
