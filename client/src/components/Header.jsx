// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold">studysync</div>
          <div className="relative w-48">
            <select className="w-full border-2 border-black rounded p-2 appearance-none bg-white">
              <option>Tufts University</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;