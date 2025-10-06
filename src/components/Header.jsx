import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-bold text-netflix">Movie Search</h1>
      {/* Removed search input */}
    </header>
  );
}