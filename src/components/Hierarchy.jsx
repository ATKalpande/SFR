import React from "react";
import { motion } from "framer-motion";
export const Hierarchy = () => {
  function FrontOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 font-bold md:text-2xl text-gray-400">
        {" "}
        MONETARY ASSISTANCE{" "}
      </div>
    );
  }

  function BackOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all z-10 card-back font-semibold text-gray-200">
        {" "}
        By providing funds to the team directly{" "}
      </div>
    );
  }

  function SecFrontOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 font-bold md:text-2xl text-gray-400">
        {" "}
        PRODUCT SUPPORT{" "}
      </div>
    );
  }

  function SecBackOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center text-center items-center bg-gray-900 transition-all z-10 card-back font-semibold text-gray-200">
        {" "}
        By providing componenets required for manufacturing of our vehicle{" "}
      </div>
    );
  }

  function ThirdFrontOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 font-bold md:text-2xl text-gray-400 card-front">
        {" "}
        PROVIDING SERVICES{" "}
      </div>
    );
  }

  function ThirdBackOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center px-5 text-center items-center bg-gray-900 transition-all z-10 card-back font-semibold text-gray-200">
        {" "}
        By providing services like machining , logistics and accomodation as per
        requirement of team{" "}
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row justify-center items-center gap-5"
    >
      <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-500 card">
        <FrontOfCard />
        <BackOfCard />
      </div>
      <div className="relative w-96 my-4 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-500 card">
        <SecFrontOfCard />
        <SecBackOfCard />
      </div>
      <div className="relative w-96 my-4 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-500 card">
        <ThirdFrontOfCard />
        <ThirdBackOfCard />
      </div>
    </motion.section>
  );
};
