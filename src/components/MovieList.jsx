import React, { useState } from 'react';
import MovieCard from './MovieCard.jsx';
import MovieDetailModal from './MovieDetailModal.jsx';

export default function MovieList({ movies }) {
  const [selectedId, setSelectedId] = useState(null);

  if (!movies || movies.length === 0) return <p className="text-gray-400">No results found</p>;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} onClick={setSelectedId} />
        ))}
      </div>
      {selectedId && (
        <MovieDetailModal imdbID={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </>
  );
}
