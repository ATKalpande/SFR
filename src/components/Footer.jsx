import React from "react";

export const Footer = () => {
  return (
    <footer className=" w-full  text-center bottom-0">
      <div className="flex align-left justify-around">
          <div>
            <p><a href="https://instagram.com/sahyadriformularacers?igshid=YmMyMTA2M2Y=">instagram</a></p>
           
          </div>
          <div>
            <p><a href="https://www.facebook.com/profile.php?id=100075801985622&mibextid=LQQJ4d">Facebook</a> </p>
          </div>
          <div>
          <p><a href="https://www.linkedin.com/company/team-sahyadri-formula-racers/">Linkdin</a></p>
          </div>
      </div>
      <p className="text-gray-500 py-1">Build with ❤️ By RD and AK</p>
      <p className="text-center text-gray-300 py-1">
        &copy; 2023 - All rights reserved
      </p>
    </footer>
  );
};
