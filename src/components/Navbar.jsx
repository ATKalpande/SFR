import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

  const NavLink = ({ href, children }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
      <li>
        <Link
          className={`text-xl ${
            isActive ? "font-extrabold text-red-500" : "font-normal"
          } hover:text-red-500 transition-colors duration-300`}
          href={href}
        >
          {children}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`${bgColor} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold md:text-4xl text-2xl text-red-500">
              My Website
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-end justify-center gap-5">
              <NavLink href="/">Home</NavLink>
              {/* <NavLink href="/about">About</NavLink> */}
              <NavLink href="/crowd-funding">CrowdFunds</NavLink>
              <NavLink href="/sponsors">sponsors</NavLink>
             <NavLink href ="/gallery">Gallery</NavLink>
              <NavLink href="/contact">Contact</NavLink>
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
            <span className="pt-4">
              <NavLink href="/">Home</NavLink>
            </span>
            {/* <span className="pt-2">
              <NavLink href="/about">About</NavLink>
            </span> */}
            <span className="pt-2">
              <NavLink href="/crowd-funding">CrowdFunds</NavLink>
            </span>

            <span className="pt-2">
              <NavLink href="/gallery">Gallery</NavLink>
            </span>

            <span className="pt-2">
              <NavLink href="/sponsors">Sponsors</NavLink>
            </span>
            
         
            <span className="pt-2">
              <NavLink href="/contact">Contact</NavLink>
            </span>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
