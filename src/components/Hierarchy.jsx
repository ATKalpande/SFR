import React from "react";
import { motion } from "framer-motion";
export const Hierarchy = ({ supportLevels }) => {
  console.log(supportLevels);
  function FrontOfCard({ title }) {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 font-bold md:text-2xl text-gray-400">
        {" "}
        {title}
      </div>
    );
  }

  function BackOfCard({ description }) {
    return (
      <div className="absolute inset-0 w-full h-full pl-6 flex justify-center items-center bg-gray-900 transition-all z-10 card-back font-semibold text-gray-200">
        {" "}
        {description}
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
      {supportLevels.map((supportLevel) => {
        return (
          <div
            key={supportLevel._key}
            className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-500 card"
          >
            <FrontOfCard title={supportLevel.title} />
            <BackOfCard description={supportLevel.description} />
          </div>
        );
      })}
    </motion.section>
  );
};
