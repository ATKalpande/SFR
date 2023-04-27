import React from "react";
import { motion } from "framer-motion";
import { Slider } from ".";

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


      <h2 className=" font-bold md:text-4xl sm:text-2xl pt-10 md:hidden">
        INTRODUCTION
      </h2>
      <section className="flex item-center justify-around flex-col-reverse md:flex-row pt-6 md:mt-20 md:py-10  min-h-0 text-justify w-full">
        <div className="md:lef-sec  md:w-1/2 md:ps-8 w-full p-5">
          <div className="font-normal  tracking-normal p-3 flex flex-col justify-center">
            <h2 className=" font-bold md:text-4xl sm:text-2xl p-3 m-3 mb-10 hidden md:block">
              IINTRODUCTION
            </h2>
            <p className="text-gray-300 transition ease-in delay-100 hover:-translate-y-1 hover:scale-10 hover:font-semibold duration-300 md:text-2xl">
              TEAM SAHYADRI FORMULA RACERS India is a student run, non-profit
              racing team based in Govt. College Of Engineering & Research
              Avasari Pune. We are a team of Highly Exeburant and hardworking
              race car enthusiasts from various streams and we develop, design
              and manufacture a student formula style car to take part in FSAE
              Competition organized by SAE INDIA
            </p>
            <br />
            <p className="md:text-2xl text-gray-500">
              Government College Of Engineering & Research, Awsari Is The
              Institute For Higher Education, That Aims To Provide Progressive
              Environment, And To Be A Source Of Knowledge And Expertise In The
              Fields Of Education, Research And Teaching. The College Is NBA
              Accredited For Automobile And Mechanical Engineering Programme.
              Team Sahyadri Formula Racers Is The Formula Student Team Of Govt.
              College of Engineering & Research Avasari. Since Its Origin Is In
              2021, The Team Has Done Tremendous Progress In Designing And
              Production With Systematic Planning, Work Distribution, Knowledge
              Transfer And Task-oriented Supervision, The Team Aims To Improve
              The Quality And Efficiency Of Its Products And To Contribute
              Towards Betterment Of The Indian Automotive Industry. The Team
              Consist About 25 Members, Working Together In 8 Subsystems, The
              Team Craves To Overcome The Intricate Designing And Manufacturing
              Challenges, To Produce Highly Efficient. Low Cost And Reliable
              Racing Cars.
            </p>
          </div>
        </div>


        <motion.div
          className="md:w-1/2 h-full md:ps-1 md:p-5 md:m-5 w-full p-5 "
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <Slider />
          {/* <img
            className="object-fill w-full h-auto rounded"
            src="https://picsum.photos/800/500"
            alt="hero-image" */}
          
        </motion.div>


      </section>
    </motion.div>
  );
};
