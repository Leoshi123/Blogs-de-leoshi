import React from 'react';
import { Link } from 'react-router-dom';

const Fab = ({ to }) => {
  return (
    <Link 
      to={to}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </Link>
  );
};

export default Fab;
