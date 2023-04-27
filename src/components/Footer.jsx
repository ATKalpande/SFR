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
<<<<<<< HEAD
    <footer className=" w-full  text-center align-center  bottom-0">
      <div className="flex  ">
          <div className="mx-4">
            <p><a href="https://instagram.com/sahyadriformularacers?igshid=YmMyMTA2M2Y="><img width="30px" src="https://tse1.mm.bing.net/th?id=OIP.OaA1UyS1Zq3dW4ztbuK9EgHaHW&pid=Api&P=0" alt="" /></a></p>
           
          </div>
          <div className="mr-4">
            <p><a href="https://www.facebook.com/profile.php?id=100075801985622&mibextid=LQQJ4d"><img width="30px" src="https://tse1.mm.bing.net/th?id=OIP.F3xR8ls8kYW4hwfduKGa_wHaHa&pid=Api&P=0" /></a> </p>
          </div>

          <a  href="https://www.linkedin.com/company/team-sahyadri-formula-racers/"><img width="30px" src="https://tse1.mm.bing.net/th?id=OIP.2GoCzqQxSthKb4Vi2IjaugHaHa&pid=Api&P=0" alt="" /></a>

          <div>
          <p></p>
          </div>
      </div>
      <p className="text-gray-500 py-1 ">Build with ❤️ By RD and AK</p>
      <p className="text-center  text-gray-300 py-1">
=======
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
>>>>>>> 689191a1b322c7ad2d4a0b3cf58afd797252a9b1
        &copy; 2023 - All rights reserved
      </p>
      <p className="text-gray-500 pb-1">Build with ❤️ By RD and AK</p>
    </footer>
  );
};
