import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing1 from "./pages/Landing1.jsx";
import Landing2 from "./pages/Landing2.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            UniSP
          </Link>
          <nav className="space-x-4">
            <Link className="px-3 py-1 rounded hover:bg-gray-100" to="/lp1">
              LP-1
            </Link>
            <Link className="px-3 py-1 rounded hover:bg-gray-100" to="/lp2">
              LP-2
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="py-12 text-center">
                <h1 className="text-3xl font-semibold">
                  University Landing Pages
                </h1>
                <p className="mt-4">Choose LP-1 or LP-2 from the navbar.</p>
              </div>
            }
          />
          <Route path="/lp1" element={<Landing1 />} />
          <Route path="/lp2" element={<Landing2 />} />
        </Routes>
      </main>
    </div>
  );
}
