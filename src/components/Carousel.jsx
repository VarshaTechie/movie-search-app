export default function Carousel({ movies }) {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
      {movies.map((movie) => (
        <img
          key={movie.imdbID}
          src={movie.Poster}
          alt={movie.Title}
          className="w-40 h-60 object-cover rounded-lg hover:scale-105 transition-transform"
        />
      ))}
    </div>
  );
}
