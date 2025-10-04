import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Theatron Logo"
              />
            </Link>
          </div>

          {/* Center section: Desktop links */}
          <div className="hidden sm:flex sm:space-x-4 sm:items-center">
            {/* Home */}
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Home
            </Link>

            {/* Dashboard Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700"
              >
                Dashboard ▾
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
                  <Link
                    to="/domains"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Domains
                  </Link>
                  <Link
                    to="/plays"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Plays
                  </Link>
                  <Link
                    to="/memories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Memories
                  </Link>
                </div>
              )}
            </div>

            {/* Other links */}
            <Link
              to="/team"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Team
            </Link>
            <Link
              to="/projects"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Projects
            </Link>
            <Link
              to="/calendar"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Calendar
            </Link>
          </div>

          {/* Right section: Profile / Mobile button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                ) : (
                  <svg
                    className="block h-6 w-6"
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
                )}
              </button>
            </div>

            {/* Profile Image */}
            <div className="ml-3">
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>

          {/* Dashboard Mobile Dropdown */}
          <div className="px-4 py-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left text-white bg-gray-900 px-3 py-2 rounded-md font-medium"
            >
              Dashboard ▾
            </button>
            {isDropdownOpen && (
              <div className="mt-1 ml-2">
                <Link
                  to="/domains"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Domains
                </Link>
                <Link
                  to="/plays"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Plays
                </Link>
                <Link
                  to="/memories"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Memories
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/team"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </Link>
          <Link
            to="/projects"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="/calendar"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
