import React from 'react';

export default function Hero({ onSearch }) {
  return (
    <section className="bg-gray-900 flex flex-col items-center justify-center py-20 text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Discover Your Favorite Movies</h2>
      <p className="text-gray-400 mb-6 max-w-xl">
        Search and explore movies using the OMDb API.
      </p>
      <input
        type="text"
        placeholder="Type a movie name..."
        className="px-4 py-2 rounded-md w-full md:w-1/3 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-netflix"
        onChange={(e) => onSearch(e.target.value)}
      />
    </section>
  );
}
