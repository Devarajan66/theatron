import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Search, Home, CalendarDays, Theater, Users, Camera, Phone, Info } from "lucide-react"; // Theatre-related icons

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#1a0e0f] text-white shadow-lg">
      {/* Top Search Bar */}
      <div className="bg-[#2d1416] py-2 px-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="Theatron Logo"
              className="h-10 w-auto rounded-lg shadow-md"
            />
          </Link>
          <h1 className="text-xl font-bold tracking-wide text-[#e6b17e]">
            THEATRON
          </h1>
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
            <NavItem to="/" icon={<Home />} label="Home" />
            <NavItem to="/events" icon={<CalendarDays />} label="Events" />
            <NavItem to="/domains" icon={<Users />} label="Domains" />
            <NavItem to="/plays" icon={<Theater />} label="Plays" />
            <NavItem to="/memories" icon={<Camera />} label="Memories" />
            <NavItem to="/contact" icon={<Phone />} label="Contact" />
            <NavItem to="/about" icon={<Info />} label="About Us" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#e6b17e] hover:text-white p-2 rounded-md"
            >
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-[#2d1416] text-[#f4f1ef] py-3 space-y-2">
            <MobileNavItem to="/" label="Home" />
            <MobileNavItem to="/events" label="Events" />
            <MobileNavItem to="/domains" label="Domains" />
            <MobileNavItem to="/plays" label="Plays" />
            <MobileNavItem to="/memories" label="Memories" />
            <MobileNavItem to="/contact" label="Contact" />
            <MobileNavItem to="/about" label="About Us" />
          </div>
        )}
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 text-[#f4f1ef] hover:text-[#e6b17e] transition duration-200"
    >
      <span className="h-5 w-5">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function MobileNavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 hover:bg-[#864c52] transition text-sm font-medium"
    >
      {label}
    </Link>
  );
}

export default Navbar;
