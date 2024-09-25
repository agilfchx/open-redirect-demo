import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../posts.json';

const Posts = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
        
        <div className="space-y-4">
          {postsData.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
              <Link to={`/posts/${post.id}`} className="text-xl font-semibold text-gray-800 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
