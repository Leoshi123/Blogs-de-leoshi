import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="font-bold text-xl mb-2">{post.title}</h2>
            <p className="text-gray-700 text-base mb-4">
              {post.content.substring(0, 150)}...
            </p>
            <Link to={`/post/${post.id}`} className="text-indigo-500 hover:text-indigo-600 font-semibold">Leer más</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
