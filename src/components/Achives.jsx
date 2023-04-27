import React from "react";
import { motion } from "framer-motion";

const achivements = [
  {
    id: 1,
    text: "Secured All India Rank 14 in business presentation.",
  },
  {
    id: 2,
    text: "Secured all India rank 19 in design presentation.",
  },
  {
    id: 3,
    text: "Secured all India rank 22 in all over event.",
  },
  {
    id: 4,
    text: "Collaboration with more than 20 companies for sponsorship in the first year of participation.",
  },
  {
    id: 5,
    text: "Got 3 international sponsors which is first time in the college.",
  },
];

export const Achives = () => {
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
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-10 uppercase my-5 py-5 font-Manrope text-red-500">
          Achivements
        </h2>
        {achivements.map((achievement) => {
          const isEven = achievement.id % 2 === 0;
          const translationValue = isEven ? 300 : -300;
          return (
            <motion.div
              key={achievement.id}
              className="flex flex-col items-center justify-center md:w-[70%] w-full md:mx-auto mx:[10%] my-5"
              initial={{ x: translationValue, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className={achievementStyle}>{achievement.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
