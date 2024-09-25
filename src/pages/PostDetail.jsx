import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../posts.json';

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = postsData.find(post => post.id === postId);
  // const navigate = useNavigate();

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    );
  }

  const currentIndex = postsData.findIndex(post => post.id === postId);
  const nextPostId = currentIndex < postsData.length - 1 ? postsData[currentIndex + 1].id : null;
  const prevPostId = currentIndex > 0 ? postsData[currentIndex - 1].id : null;

  /* [Mitigation] - Remove Parameter */

  // const handleNextPost = () => {
  //   if (nextPostId) {
  //     navigate(`/posts/${nextPostId}`);
        /* or if u want to use window.location */
       /* window.location.assign(`/posts/${nextPostId}`); */
  //   }
  // };

  // const handlePrevPost = () => {
  //   if (prevPostId) {
  //     navigate(`/posts/${prevPostId}`);
  //   }
  // };

  /* [Vulnerable] Construct the URL with the nextPage parameter */
  const nextPageUrl = nextPostId ? `http://localhost:5173/posts/${nextPostId}` : null;

  const handleNextPost = () => {
    if (nextPageUrl) {
      window.location.assign(`/redirect?nextPage=${encodeURIComponent(nextPageUrl)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-2">{post.date}</p>
        <p className="text-gray-700">{post.content}</p>

        <div className="mt-4 flex justify-between">
          {prevPostId && (
            <button
              onClick={() => window.location.assign(`http://localhost:5173/posts/${prevPostId}`)}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
            >
              Previous Post
            </button>
          )}

          {nextPostId && (
            <button
              onClick={handleNextPost}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Next Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
