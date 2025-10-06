// src/api/omdb.js
const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // <- Paste your API key in .env

if (!API_KEY) {
  console.warn('⚠️ VITE_OMDB_API_KEY is not set in your .env file!');
}

/**
 * Search movies by query
 * @param {string} query - Search text
 * @param {number} page - Page number (default 1)
 */
export async function searchMovies(query, page = 1) {
  if (!query) return { Search: [], totalResults: '0' };

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

/**
 * Get movie details by IMDb ID
 * @param {string} imdbID
 */
export async function getMovieById(imdbID) {
  if (!imdbID) return null;

  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
