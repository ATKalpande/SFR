import { Layout } from "@/components";
import React from "react";
import { Hierarchy } from "@/components/hierarchy";
import { motion } from "framer-motion";

export const CroudFunding = () => {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="my-12 text-lg min-h-screen flex flex-col items-center"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 uppercase text-center text-2xl text-red-500">
          ABOUT US
        </h2>

        <motion.p
          initial={{
            opacity: 0,
            x: -500,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="text-gray-400 my-4 py-2 md:max-w-[60%] mx-auto text-xl px-5 md:text-center text-justify"
        >
          <strong className="font-extrabold text-gray-50 uppercase">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TEAM SAHYADRI FORMULA RACERS
            India&nbsp;
          </strong>
          is the official Formula SAE team of Govt. College of Engineering &amp;
          Research Avasari, Pune. The team is formed by 40+ undergraduate
          engineering students from various departments whose vision is to
          achieve something pre-eminent at undergraduate level.
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            x: 500,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="text-gray-400 my-4 py-2 md:text-center md:max-w-[60%] mx-auto text-xl px-5 text-justify"
        >
          Being Motorsports enthusiasts and future engineers, the students take
          up the task of designing and manufacturing a student formula race-car
          and participate in the event SAE SUPRA organised by SAE INDIA . The
          event will be held on the only f1 track in India i.e. THE BUDDHA
          INTERNATIONAL CIRCUIT. Formula Student competitions get participation
          from a number of teams from around the country. Thus, this gives TEAM
          SAHYADRI FORMULA RACERS exposure to world-class engineering and helps
          develop the engineering practices of students that are going to be a
          vital part in the development of technology in India.
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="my-12 text-lg min-h-screen flex flex-col"
      >
        <div className="md:w-full md:pr-8">
          <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 uppercase text-center text-2xl text-red-500">
            How Can You Support Us
          </h2>
          <p className="text-gray-600 my-4 py-2 text-center">
            Hover / Click to reveal our Hierarchy of support.
          </p>
          <Hierarchy />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-lg min-h-screen flex flex-col"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 relative md:top-60 uppercase text-center text-2xl text-red-500">
          Budget Analysis
        </h2>
        <div className="md:w-full flex flex-col md:flex-row justify-center items-center md:mt-0 px-5 ms:px-20">
          <motion.img
            initial={{
              opacity: 0,
              x: -500,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.3 }}
            className="rounded-lg m-4 w-full md:w-auto md:aspect-[3/5] object-contain md:max-w-[30%]"
            src="/budjet.jpeg"
            alt="budget"
          />
          <motion.img
            initial={{
              opacity: 0,
              x: 500,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.3 }}
            className="rounded-lg w-full  md:w-auto md:aspect-[3/5] object-contain md:max-w-[50%]"
            src="/pie.jpeg"
            alt="pie chart"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg min-h-screen flex flex-col"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl py-5 uppercase text-2xl text-center text-red-500">
          Funding Form
        </h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileVisible={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScT5aPNvA76sjXfRyPY1FHZP1pOEdXJFTgoMyOwbh5XStmfsA/viewform?embedded=true"
            height="1600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="w-full"
          >
            Loading…
          </iframe>
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default CroudFunding;
