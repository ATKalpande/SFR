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
<<<<<<< HEAD
  const styleCom = ` flex  px-4 ml-9 mb-4 w-1/2 py-4 w-full   rounded hover:bg-gray-800 delay-300 hover:p-5 `;
  return (
    <>
      <div className="warapper flex flex-col  self-center  ">
        <h2 className="  px-4 py-3  ml-6 w-full  underline decoration-red-800  drop-shadow font-extrabold">Achivements</h2>
        <div>
          <p className={styleCom}>
            secured All India Rank <span>14</span> in business presentation
          </p>
        </div>
        <div>
          <p className={styleCom}>
            Secured all India rank 19 in design presentation
          </p>
        </div>
        <div>
          <p className={styleCom}>
            Secured all India rank 22 in all over event
          </p>
        </div>
        <div>
          <p className={styleCom}>
            {" "}
            Collaboration with more than 20 companies for sponsorship in the
            first year of participation
          </p>
        </div>
=======
  const animateLeft = {
    initial: { x: "-100vw", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  };
>>>>>>> 689191a1b322c7ad2d4a0b3cf58afd797252a9b1

  const animateRight = {
    initial: { x: "100vw", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  };

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
<<<<<<< HEAD
     
    </>
=======
    </motion.section>
>>>>>>> 689191a1b322c7ad2d4a0b3cf58afd797252a9b1
  );
};
