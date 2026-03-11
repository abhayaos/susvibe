import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai"; // Install react-icons if needed

const menuItems = [
  { name: "Home", path: "/" },
  // add more items here if needed
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check for JWT token in localStorage
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          Sus<span className="text-gray-900">Vibe</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {loggedIn && (
            <Link
              to="/upload"
              className="text-gray-700 p-2 rounded hover:bg-gray-100 transition"
              title="Upload"
            >
              <AiOutlineUpload size={22} />
            </Link>
          )}
          {!loggedIn && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/80 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col gap-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {loggedIn && (
              <Link
                to="/upload"
                className="flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineUpload size={20} /> Upload
              </Link>
            )}

            {!loggedIn && (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}