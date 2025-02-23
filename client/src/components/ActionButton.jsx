import React from 'react';

const ActionButton = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="border-2 border-black bg-yellow-200 px-12 py-4 text-xl font-medium hover:bg-yellow-300 transition-colors"
    >
      {children}
    </button>
  );
};

export default ActionButton;