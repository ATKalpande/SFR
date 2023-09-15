import React from "react";
import { motion } from "framer-motion";
import { Slider } from ".";

import BlockContent from "@sanity/block-content-to-react";

export const Intro = ({ heroText, sliderImages }) => {
  console.log("Slider Images", sliderImages);
  const components = {
    types: {
      text: (props) => <p>{props.node.text}</p>,
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col snap-center"
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className=" font-bold md:text-4xl text-2xl pt-5 md:hidden uppercase text-center text-red-500">
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
            <h2 className=" font-bold md:text-4xl text-2xl py-3 my-3 mb-10 hidden md:block uppercase text-center text-red-500">
              {heroText.title}
            </h2>
            <div className="text-gray-400 transition ease-in delay-100 hover:-translate-y-1 duration-300 md:text-xl">
              <BlockContent
                blocks={heroText.paragraphs}
                serializers={components}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="xl:w-1/2   w-full "
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Slider images={...sliderImages} />
        </motion.div>
      </section>
    </motion.div>
  );
};
