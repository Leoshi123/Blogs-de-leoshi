import React, { useState } from 'react';
import { supabase } from '../../lib/supabase'; // Import Supabase client

const PostForm = ({ post, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // New function to upload image to Supabase Storage
  const uploadImageToSupabase = async (file) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('images') // Make sure you have a 'images' bucket in your Supabase project
      .upload(fileName, file);

    if (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

    // Get public URL for the uploaded image
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let featured_image = post ? post.featured_image : '';

    if (image) {
      setIsUploading(true);
      try {
        // Use the new Supabase upload function
        featured_image = await uploadImageToSupabase(image);
      } catch (error) {
        alert('Error al subir la imagen. Por favor, inténtalo de nuevo.');
        setIsUploading(false);
        return;
      } finally {
        setIsUploading(false);
      }
    }

    onSubmit({ title, content, featured_image });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Título
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="title"
          type="text"
          placeholder="Título de la Publicación"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Imagen Destacada
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {post?.featured_image && !image && (
          <img src={post.featured_image} alt="Imagen actual" className="w-32 h-32 mt-4 object-cover" />
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Contenido
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-48"
          id="content"
          placeholder="Escribe tu publicación aquí..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={isUploading}
        >
          {isUploading ? 'Subiendo...' : (post ? 'Actualizar' : 'Crear')}
        </button>
        {onCancel && (
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default PostForm;
