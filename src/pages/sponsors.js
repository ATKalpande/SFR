import { Layout } from "@/components";
import BlockContent from "@sanity/block-content-to-react";

import React from "react";
import { motion } from "framer-motion";
import { getSponsorsPage } from "@/services";
import { urlFor } from "../../sanity";

export const sponsors = ({ data }) => {
  const components = {
    types: {
      text: (props) => <span>{props.node.text}</span>,
    },
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:my-36 my-12 text-lg min-h-screen flex flex-col items-center"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 py-5 mb-20 uppercase text-center text-2xl text-red-500">
          {data.whyToSponsorComponent.title}
        </h2>
        <div className="text-gray-400 md:max-w-[60%] px-5 text-md">
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
            className=" my-4 py-2 mx-auto md:text-xl px-5 md:text-center text-justify"
          >
            <BlockContent
              blocks={data.whyToSponsorComponent.paragraphs}
              serializers={components}
            />
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-lg min-h-screen flex flex-col items-center mb-36"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 py-5 mb-20 uppercase text-center text-2xl text-red-500">
          {data.sponsorLogosTitle}
        </h2>
        {data.sponsorsLogosRow.map((row) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className={`md:my-8 flex md:flex-row flex-col justify-center text-lg items-center gap-1 md:gap-10 p-10 md:p-0`}
              key={row._key}
            >
              {row.imagesRow.map((img) => {
                return (
                  <div className={`mr-5`} key={img._key}>
                    <a href={img.sponsorWebsiteLink}>
                      <img
                        className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75 cursor-pointer"
                        width="200px"
                        src={img.sponsorLogoLink || urlFor(img).url()}
                      ></img>
                    </a>
                  </div>
                );
              })}
            </motion.section>
          );
        })}
      </motion.section>
    </Layout>
  );
};

export default sponsors;

export async function getStaticProps() {
  const data = await getSponsorsPage();
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
