import { ContactForm, GoogleMap, Layout } from "@/components";
import Head from "next/head";
import React from "react";
import { getContactPage, getSocials } from "@/services";
import { motion } from "framer-motion";

const Contact = ({ data, socials }) => {
  return (
    <div>
      <Head>
        <title>Contact | Team SFR</title>
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
        <>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-20 p-10 md:p-0 md:mt-36 text-lg min-h-screen/2 flex flex-col items-center"
          >
            <h2 className="font-bold md:text-4xl sm:text-2xl py-5 mb-20 uppercase text-center text-2xl text-red-500">
              {data.locationComponent.title}
            </h2>

            <GoogleMap
              location={data.locationComponent.locationAddress}
              zoom={10}
            />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="my-80 text-lg min-h-screen flex flex-col items-center"
          >
            <h2 className="font-bold md:text-4xl sm:text-2xl py-5 mb-20 uppercase text-center text-2xl text-red-500">
              Contact Us
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                  scale: 0.5,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 1 }}
                className="md:w-1/2 w-full pt-4 md:pt-0 md:relative md:-top-14 md:pl-16 md:ml-10 px-10 mt-10 text-xl"
              >
                <h2 className="font-extrabold text-3xl text-gray-500 my-5">
                  Address
                </h2>
                <p className="md:text-xl text-lg">
                  {data.contactUsComponent.collegeName}
                  <br />
                  <p>
                    {data.contactUsComponent.villegeName}{" "}
                    {data.contactUsComponent.districtName}
                  </p>
                  <p>Pincode - {data.contactUsComponent.pinCode}</p>
                  <p>
                    {data.contactUsComponent.stateName}{" "}
                    {data.contactUsComponent.countryName}.
                  </p>
                </p>
                <h3 className="text-bold mt-5 ">
                  {data.contactUsComponent.title}
                </h3>
                <p>
                  Email :{" "}
                  <a href="mailto: sahyadriformularacers@gmail.com">
                    {" "}
                    {data.contactUsComponent.email}
                  </a>{" "}
                </p>
                <p>
                  Phone No :{" "}
                  <a href="#"> {data.contactUsComponent.phoneNumber} </a>{" "}
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                  scale: 0.5,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 1 }}
                className="w-full px-10 md:mr-9 md:w-2/3"
              >
                <ContactForm />
              </motion.div>
            </div>
          </motion.section>
        </>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getContactPage();
  const socials = await getSocials();
  return {
    props: {
      data,
      socials,
    },
    revalidate: 1,
  };
};

export default Contact;
