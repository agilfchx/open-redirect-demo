import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../users.json';

const Profile = () => {
  const navigate = useNavigate();
  const session = localStorage.getItem('session');
  const user = usersData.find(user => user.session === session);

  // Redirect to login if user not found
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect_url=/profile');
    }
  }, [user, navigate]);

  const [username, setUsername] = useState(user ? user.username : '');
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    user.username = newUsername;
    setUsername(newUsername);
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <img src="kuciang.png" alt="Avatar" className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-xl font-semibold mb-4">{username}</h2>
        <div className="mt-4">
          {isEditing ? (
            <div className="flex">
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="border rounded-lg py-2 px-3 flex-grow mr-2"
              />
              <button
                onClick={handleSaveClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
            >
              Edit Username
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
