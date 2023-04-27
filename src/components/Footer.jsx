import React from "react";
import { SocialIcon } from "react-social-icons";
const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/sahyadriformularacers?igshid=YmMyMTA2M2Y=",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100075801985622&mibextid=LQQJ4d",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/sahyadri-formula-racers/",
  },
];
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
      <p className="text-gray-500 pb-1">Build with ❤️ By RD and AK</p>
    </footer>
  );
};
