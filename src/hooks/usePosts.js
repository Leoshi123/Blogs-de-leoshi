import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*');
        if (error) throw error;
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (post) => {
    try {
      const { data, error } = await supabase.from('posts').insert([post]).select();
      if (error) throw error;
      setPosts([...posts, data[0]]);
    } catch (error) {
      setError(error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const { data, error } = await supabase.from('posts').update(updatedPost).match({ id }).select();
      if (error) throw error;
      setPosts(posts.map(p => p.id === id ? data[0] : p));
    } catch (error) {
      setError(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const { error } = await supabase.from('posts').delete().match({ id });
      if (error) throw error;
      setPosts(posts.filter(p => p.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return { posts, loading, error, addPost, updatePost, deletePost };
};
