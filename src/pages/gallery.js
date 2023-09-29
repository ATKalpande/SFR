import { Layout } from "@/components";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { getGalleryPage, getSocials } from "@/services";
import { urlFor } from "../../sanity";

const ImageRowCover = ({ children, socials }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="min-h-screen flex flex-col items-center justify-start my-20"
    >
      {children}
    </motion.section>
  );
};
export const gallery = ({ data, socials }) => {
  return (
    <div>
      <Head>
        <title>Gallery | Team SFR</title>
        <meta
          name="description"
          property="og:description"
          key="desc"
          content="TEAM SAHYADRI FORMULA RACERS INDIA is a student run, non-profit racing team based in Govt. College Of Engineering & Research Avasari Pune. We are a team of Highly Exeburant and hardworking race car enthusiasts from various streams and we develop, design and manufacture a student formula style car to take part in FSAE Competition organized by SAE INDIA"
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/bcfb3044/production/a5ea9580ede03a29ba1fb1b66fc06de5938ef605-1280x853.jpg"
        />
        <link rel="icon" href="logo.svg" sizes="48x48" type="image/png" />
      </Head>

      <Layout socials={socials.socials}>
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-16 py-5 mb-20 uppercase text-center text-2xl text-red-500">
          {data.gallaryComponent.title}
          <small
            p
            className="text-gray-600 my-4 py-2 text-center block text-sm"
          >
            {data.gallaryComponent.subTitle}
          </small>
        </h2>

        {data.gallaryImagesRows.map((row) => {
          return (
            <ImageRowCover key={row._id}>
              <section
                className={`my-8 flex md:flex-row flex-col justify-center text-lg items-center gap-8 md:gap-5`}
              >
                {row.imagesRow.map((img) => {
                  return (
                    <div
                      className={`flex justify-center items-center`}
                      key={img._key}
                    >
                      <img
                        className={`md:hover:w-[85%] hover:w-[95%] hover:border-gray-50 hover:border-5 animation-all md:max-w-[650px] max-w-[400px]`}
                        width={200}
                        src={urlFor(img).url()}
                        alt={img.altText}
                      />
                    </div>
                  );
                })}
              </section>
            </ImageRowCover>
          );
        })}
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getGalleryPage();
  const socials = await getSocials();
  return {
    props: {
      data,
      socials,
    },
    revalidate: 1,
  };
};

export default gallery;
