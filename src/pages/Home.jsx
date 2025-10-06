import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import MovieList from '../components/MovieList.jsx';
import Footer from '../components/Footer.jsx';
import { searchMovies } from '../api/omdb.js';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return setResults([]);
    let cancelled = false;
    setLoading(true);
    const t = setTimeout(async () => {
      const res = await searchMovies(query);
      if (!cancelled) {
        setResults(res.Search || []);
        setLoading(false);
      }
    }, 350); // debounce
    return () => { cancelled = true; clearTimeout(t); }
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setQuery} />
      <main className="flex-1">
        <Hero onSearch={setQuery} />
        <section className="px-6 md:px-12 py-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          {loading && <p className="text-sm text-gray-300">Searching...</p>}
          <MovieList movies={results} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
