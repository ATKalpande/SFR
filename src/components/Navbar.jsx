import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-end justify-center gap-5 text-gray-200">
        <li className="">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
