import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const bgColor = isScrolled ? "bg-gray-800" : "bg-transparent";

  return (
    <nav className={`${bgColor} sticky top-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold">
              My Website
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-end justify-center gap-5">
              <li>
                <a href="/" className="text-white font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="/crowd-funding" className="text-white font-bold">
                  CrowdFunds
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white font-bold">
                  Contact
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-white font-bold">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "h-60" : "h-0"
        }`}
      >
        {isOpen ? (
          <ul className="flex flex-col items-center justify-center gap-5 bg-gray-900">
            <li>
              <a
                href="/"
                className="block text-white font-bold py-2 px-4 hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-white font-bold py-2 px-4 hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/crowd-funding"
                className="block text-white font-bold py-2 px-4 hover:bg-gray-700"
              >
                CrowdFunds
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-white font-bold py-2 px-4 hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/feedback"
                className="block text-white font-bold py-2 px-4 hover:bg-gray-700"
              >
                Feedback
              </a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
