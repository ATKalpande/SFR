import React from "react";


export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-end justify-center gap-5 ">
        <li className="">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/crowd-funding">CrowdFunds</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/feedback">Feedback</a>
        </li>
      </ul>
    </nav>
  );
};
