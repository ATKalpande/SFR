import React from "react";
import { motion } from "framer-motion";

export const Intro = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: "-50vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const imgVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      x: "50vw",
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-center font-bold md:text-4xl sm:text-2xl pt-10 md:hidden">
        Introduction
      </h2>
      <section className="flex item-center justify-around flex-col-reverse md:flex-row pt-6 md:mt-20 md:py-10  min-h-0 text-justify w-full">
        <div className="md:lef-sec  md:w-1/2 md:ps-8 w-full p-5">
          <div className="font-normal  tracking-normal p-3 flex flex-col justify-center">
            <h2 className="text-center font-bold md:text-4xl sm:text-2xl p-3 m-3 mb-10 hidden md:block">
              Introduction
            </h2>
            <p className="text-gray-300 transition ease-in delay-100 hover:-translate-y-1 hover:scale-10 hover:font-semibold duration-300 md:text-2xl">
              Orion Racing India is the official Formula SAE team of K. J.
              Somaiya College of Engineering, Mumbai. The team is formed by 60+
              undergraduate students from various engineering departments whose
              vision is to achieve something tangible at an undergraduate level.
            </p>
            <br />
            <p className="md:text-2xl text-gray-500">
              Being Motorsports enthusiasts and budding engineers, the students
              take up a task of designing and fabricating a single-seater
              formula prototype race-car and participate at International
              Formula Student events viz. Formula Student Germany and Formula
              Student India. Formula Student competitions get participation from
              a number of teams from around the globe. Thus this gives Orion
              Racing India exposure to world-class engineering and helps develop
              the engineering practices of Indian students that are going to be
              a vital part in development of technology in India.
            </p>
          </div>
        </div>
        <motion.div
          className="md:w-1/2 md:ps-1 md:p-5 md:m-5 w-full p-5 "
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <img
            className="object-fill w-full h-auto rounded"
            src="https://picsum.photos/800/500"
            alt="hero-image"
          />
        </motion.div>
      </section>
    </motion.div>
  );
};
