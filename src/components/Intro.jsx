import React from "react";
import { motion } from "framer-motion";
import { Slider } from ".";

export const Intro = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col snap-center"
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className=" font-bold md:text-4xl sm:text-2xl pt-5 md:hidden uppercase text-center text-red-500">
        INTRODUCTION
      </h2>
      <section className="flex items-center justify-center flex-col-reverse xl:flex-row pt-6 md:mt-20 md:py-10  min-h-0 text-justify w-full">
        <div className="xl:lef-sec  xl:w-1/2 md:ps-8 w-full p-5">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="px-5 flex flex-col justify-center cursor-default"
          >
            <h2 className=" font-bold md:text-4xl sm:text-2xl py-3 my-3 mb-10 hidden md:block uppercase text-center text-red-500">
              INTRODUCTION
            </h2>
            <p className="text-gray-400 transition ease-in delay-100 hover:-translate-y-1 duration-300 md:text-2xl">
              <strong className="font-extrabold text-gray-50 uppercase">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TEAM SAHYADRI FORMULA RACERS
                India&nbsp;
              </strong>
              is a student run, non-profit racing team based in Govt. College Of
              Engineering & Research Avasari Pune. We are a team of Highly
              Exeburant and hardworking race car enthusiasts from various
              streams and we develop, design and manufacture a student formula
              style car to take part in FSAE Competition organized by SAE INDIA
            </p>
            <br />
            <p className="md:text-2xl text-gray-500 hover:text-gray-400 transition-colors duration-300 delay-75">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Government College Of
              Engineering & Research, Awsari Is The Institute For Higher
              Education, That Aims To Provide Progressive Environment, And To Be
              A Source Of Knowledge And Expertise In The Fields Of Education,
              Research And Teaching. The College Is NBA Accredited For
              Automobile And Mechanical Engineering Programme. Team Sahyadri
              Formula Racers Is The Formula Student Team Of Govt. College of
              Engineering & Research Avasari. Since Its Origin Is In 2021, The
              Team Has Done Tremendous Progress In Designing And Production With
              Systematic Planning, Work Distribution, Knowledge Transfer And
              Task-oriented Supervision, The Team Aims To Improve The Quality
              And Efficiency Of Its Products And To Contribute Towards
              Betterment Of The Indian Automotive Industry. The Team Consist
              About 25 Members, Working Together In 8 Subsystems, The Team
              Craves To Overcome The Intricate Designing And Manufacturing
              Challenges, To Produce Highly Efficient. Low Cost And Reliable
              Racing Cars.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="xl:w-1/2   w-full "
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Slider />
        </motion.div>
      </section>
    </motion.div>
  );
};
