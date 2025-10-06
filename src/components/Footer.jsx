import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Movie Search App. Powered by OMDb API.
    </footer>
  );
}
