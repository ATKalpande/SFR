import { ContactForm, GoogleMap, Layout } from "@/components";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const inputStyle = ` w-full pl-2 col-span-1 py-1 scroll-pb-0.5 mb-3 bg-gray-500 rounded-md`;
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
            Our Location
          </h2>

          <GoogleMap
            location="Government College Of Engineering And Research Avasari Khurd, Pune, Pincode - 412405,Maharashtra, India"
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
                Government College Of Engineering And Research,
                <br />
                <p>Avasari Khurd, Pune,</p>
                <p>Pincode - 412405,</p>
                <p>Maharashtra, India.</p>
              </p>
              <h3 className="text-bold mt-5 ">Contact Us</h3>
              <p>
                Email :{" "}
                <a href="mailto: sahyadriformularacers@gmail.com">
                  {" "}
                  sahyadriformularacers@gmail.com
                </a>{" "}
              </p>
              <p>
                Phone No : <a href="#"> +91 6206270409 </a>{" "}
                <span className="ml-2"></span> +91 8329332765
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

export default Contact;
