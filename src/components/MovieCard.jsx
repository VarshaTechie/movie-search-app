import React from 'react';

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      className="movie-hover bg-gray-800 rounded-md overflow-hidden cursor-pointer"
      onClick={() => onClick(movie.imdbID)}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
        alt={movie.Title}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-2">
        <h3 className="font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}
