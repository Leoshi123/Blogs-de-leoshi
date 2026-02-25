import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { login, signUp } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError(null);
    try {
      const { error } = await login({ email, password });
      if (error) throw error;
      navigate('/admin');
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError(null);
    try {
      const { data, error } = await signUp({ email, password });
      if (error) throw error;
      // Si el registro es exitoso y el usuario necesita confirmar su email
      if (data.user && data.user.identities && data.user.identities.length === 0) {
        setShowConfirmation(true);
      } else {
        // En caso de que la confirmación de email esté desactivada
        navigate('/admin');
      }
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // El nuevo y bonito mensaje de confirmación
  if (showConfirmation) {
    return (
      <div className="container mx-auto p-4 max-w-md text-center">
        <div className="bg-white shadow-lg rounded-xl px-8 pt-10 pb-12 mb-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">¡Casi listo!</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Hemos enviado un correo de confirmación a <strong>{email}</strong>.
          </p>
          <div className="bg-teal-100 border-l-4 border-teal-500 text-teal-900 p-4 rounded-lg shadow">
            <p className="font-bold">Por favor, revisa tu bandeja de entrada (y la carpeta de spam) y haz clic en el enlace para activar tu cuenta.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-sm">
      <h1 className="text-3xl font-bold mb-6 text-center">Acceder</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {authError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{authError}</span>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
          <button
            onClick={handleSignUp}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
