import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false); // Cierra el menú al cerrar sesión
    navigate('/login');
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  // Componente para evitar repetir los enlaces
  const NavLinks = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? 'flex-col items-center' : 'items-center'}`}>
      <Link to="/" className={isMobile ? 'py-2' : 'mr-4'} onClick={handleLinkClick}>Inicio</Link>
      {user ? (
        <>
          <Link to="/admin" className={isMobile ? 'py-2' : 'mr-4'} onClick={handleLinkClick}>Admin</Link>
          <button onClick={handleSignOut} className={isMobile ? 'py-2' : 'mr-4'}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <Link to="/login" className={isMobile ? 'py-2' : 'mr-4'} onClick={handleLinkClick}>Iniciar Sesión</Link>
          <Link to="/register" className={isMobile ? 'py-2' : ''} onClick={handleLinkClick}>Registrarse</Link>
        </>
      )}
    </div>
  );

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" onClick={handleLinkClick}>Leoshi Blog</Link>
        
        {/* Menú de Escritorio */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Botón de Hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // Icono de Cerrar (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              // Icono de Hamburguesa
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;