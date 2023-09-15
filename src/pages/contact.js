import { ContactForm, GoogleMap, Layout } from "@/components";
import React from "react";
import { getContactPage } from "@/services";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  return (
    <Layout>
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
  );
};

export const getStaticProps = async () => {
  const data = await getContactPage();
  return {
    props: {
      data,
    },
  };
};

export default Contact;
