import React from 'react';
import PostList from '../components/posts/PostList';
import { usePosts } from '../hooks/usePosts';

const HomePage = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Bienvenido a Leoshi Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
