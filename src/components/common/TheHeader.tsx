import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import Logo from "./Logo";

const TheHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow fixed w-full z-10">
      {/* Main header container */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/todos" className="flex items-center">
          <Logo/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavList />
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              // X / Close icon
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
       <NavList mobile={true} closeMenu={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default TheHeader;
