import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/posts/PostForm';

const AdminDashboardPage = () => {
  const { posts, addPost, updatePost, deletePost, loading } = usePosts();
  const [editingPost, setEditingPost] = useState(null);

  const handleAddPost = async (post) => {
    await addPost(post);
  };

  const handleUpdatePost = async (post) => {
    await updatePost(editingPost.id, post);
    setEditingPost(null);
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
      await deletePost(id);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingPost ? 'Editar Publicación' : 'Crear Nueva Publicación'}
        </h2>
        <PostForm
          post={editingPost}
          onSubmit={editingPost ? handleUpdatePost : handleAddPost}
          onCancel={() => setEditingPost(null)}
        />
      </div>

      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Título
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{post.title}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button 
                    onClick={() => setEditingPost(post)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
