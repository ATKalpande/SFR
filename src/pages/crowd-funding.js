import { Layout, Hierarchy } from "@/components";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import { motion } from "framer-motion";
import { getFundingPage } from "@/services";
import { urlFor } from "../../sanity";

export const CroudFunding = ({ data }) => {
  const components = {
    types: {
      text: (props) => <span>{props.node.text}</span>,
    },
  };
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="my-36 text-lg min-h-screen flex flex-col items-center"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 py-5 mb-20 uppercase text-center text-2xl text-red-500">
          {data.aboutComponent.title}
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
          {
            <BlockContent
              blocks={data.aboutComponent.paragraphs}
              serializers={components}
            />
          }
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="my-12 text-lg min-h-screen flex flex-col"
      >
        <div className="md:w-full md:pr-8">
          <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 py-5 mb-20 uppercase text-center text-2xl text-red-500">
            {data.supportHierarchy.title}
            <small
              p
              className="text-gray-600 my-4 py-2 text-center block text-sm"
            >
              {data.supportHierarchy.subtitle}
            </small>
          </h2>

          <Hierarchy supportLevels={data.supportHierarchy.supportLevels} />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-lg min-h-screen flex flex-col"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 relative md:top-60 uppercase text-center text-2xl text-red-500">
          {data.budgetAnalysisComponent.title}
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
            src={urlFor(
              data.budgetAnalysisComponent.budgetImages[0].image
            ).url()}
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
            src={urlFor(
              data.budgetAnalysisComponent.budgetImages[1].image
            ).url()}
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
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 py-5 mb-20 uppercase text-2xl text-center text-red-500">
          {data.fundingFormComponent.title}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileVisible={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <iframe
            src={data.fundingFormComponent.gglFormUrl}
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

export async function getStaticProps() {
  const data = await getFundingPage();
  return {
    props: {
      data,
    },
  };
}

export default CroudFunding;
