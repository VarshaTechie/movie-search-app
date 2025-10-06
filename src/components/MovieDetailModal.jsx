import React, { useEffect, useState } from 'react';
import { getMovieById } from '../api/omdb.js';

export default function MovieDetailModal({ imdbID, onClose }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(imdbID).then(setMovie);
  }, [imdbID]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-md max-w-2xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-netflix font-bold"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
            alt={movie.Title}
            className="w-full md:w-1/3 rounded-md"
          />
          <div className="text-gray-100 flex-1">
            <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-400 mb-2">{movie.Year} | {movie.Genre}</p>
            <p className="mb-2">{movie.Plot}</p>
            <p className="text-sm text-gray-400">Director: {movie.Director}</p>
            <p className="text-sm text-gray-400">Actors: {movie.Actors}</p>
            <p className="text-sm text-gray-400">IMDB Rating: {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
