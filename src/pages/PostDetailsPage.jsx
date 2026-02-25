import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>No se encontró la publicación.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">Publicado en {new Date(post.created_at).toLocaleDateString()}</p>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
