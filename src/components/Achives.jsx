import React from "react";
import { motion } from "framer-motion";

export const Achives = ({ achievements }) => {
  const achievementStyle = `px-4 mb-4 w-full py-4 border text-gray-400 hover:text-gray-50 border-gray-500 rounded delay-75 transition ease-in duration-200 cursor-default md:text-xl text-lg`;
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-center my-10 min-h-screen flex flex-col items-center justify-start font-primary snap-center"
    >
      <div className="w-full flex flex-col items-center justify-center px-10">
        <h2 className="font-bold md:text-4xl text-2xl pt-10 uppercase my-5 py-5 font-Manrope text-red-500">
          Achivements
        </h2>
        {achievements.map((achievement, id) => {
          const isEven = id % 2 === 0;
          const translationValue = isEven ? 300 : -300;
          return (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-center md:w-[70%] w-full md:mx-auto mx:[10%] my-5"
              initial={{ x: translationValue, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className={achievementStyle}>{achievement}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
