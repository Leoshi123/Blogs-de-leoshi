import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Leoshi Blog</Link>
        <div>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/admin" className="mr-4">Admin</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
