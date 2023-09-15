import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = ({ socials }) => {
  return (
    <footer className=" w-full text-center bottom-0">
      <div className="flex items-center justify-center gap-5 my-2">
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social.title}
              url={social.profileLink}
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
      <p className="text-gray-500 pb-1">
        Build with ❤️ By{" "}
        <Link
          href="https://www.rdshinde.com/"
          target="_blank"
          title="Rishikesh Shinde"
          className="hover:text-blue-500 hover:underline transition-all ease-in duration-300"
        >
          RD{" "}
        </Link>
        and AK
      </p>
    </footer>
  );
};
