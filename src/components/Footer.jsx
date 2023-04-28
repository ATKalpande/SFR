import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" w-full text-center bottom-0">
      <div className="flex items-center justify-center gap-5 my-2">
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social.name}
              url={social.url}
              className="mx-1 grayscale hover:grayscale-0 transition ease-in duration-300"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          );
        })}
      </div>
      <p className="text-center text-gray-300 py-1">
        &copy; 2023 - All rights reserved
      </p>
    </footer>
  );
};
