import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Search, Home, CalendarDays, Theater, Users, Camera, Phone, Info } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home /> },
    { name: "Events", path: "/events", icon: <CalendarDays /> },
    { name: "Domains", path: "/domains", icon: <Users /> },
    { name: "Plays", path: "/play", icon: <Theater /> }, // match App.jsx
    { name: "Memories", path: "/memories", icon: <Camera /> },
    { name: "Contact", path: "/contact", icon: <Phone /> },
    { name: "About Us", path: "/about", icon: <Info /> },
  ];

  return (
    <div className="bg-[#1a0e0f] text-white shadow-lg">
      {/* Top Search Bar */}
      <div className="bg-[#2d1416] py-2 px-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="Theatron Logo" className="h-10 w-auto rounded-lg shadow-md" />
          </Link>
          <h1 className="text-xl font-bold tracking-wide text-[#e6b17e]">THEATRON</h1>
        </div>

        {/* Search bar */}
        <div className="flex items-center bg-[#f4f1ef] text-black rounded-full px-4 py-1 w-full max-w-md">
          <Search className="h-5 w-5 text-[#864c52] mr-2" />
          <input
            type="text"
            placeholder="Search for events, plays, memories..."
            className="bg-transparent focus:outline-none w-full text-sm"
          />
        </div>

        {/* Sign In Button */}
        <Link
          to="/signin"
          className="bg-[#e6b17e] text-[#1a0e0f] px-4 py-1 rounded-md font-semibold text-sm hover:bg-[#f4f1ef] hover:text-[#864c52] transition"
        >
          Sign In
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="px-4 sm:px-10">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 text-[#f4f1ef] hover:text-[#e6b17e] transition duration-200 ${
                  location.pathname === link.path ? "text-yellow-400 border-b-2 border-yellow-400 pb-1" : ""
                }`}
              >
                <span className="h-5 w-5">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#e6b17e] hover:text-white p-2 rounded-md"
            >
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-[#2d1416] text-[#f4f1ef] py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 hover:bg-[#864c52] transition text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
