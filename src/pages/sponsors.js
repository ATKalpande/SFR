import { Layout } from "@/components";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const sponsors = (props) => {
  const flexCom = `md:my-8 flex md:flex-row flex-col justify-center text-lg items-center gap-1 md:gap-10 p-10 md:p-0`;
  const imgComp = `mr-5 `;
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:my-36 my-12 text-lg min-h-screen flex flex-col items-center"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 uppercase text-center text-2xl text-red-500 mb-16">
          WHY SPONSOR US
        </h2>
        <div className="text-gray-400 md:max-w-[60%]">
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
            className=" my-4 py-2 mx-auto text-xl px-5 md:text-center text-justify"
          >
            <strong className="font-extrabold text-gray-50 uppercase">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TEAM SAHYADRI FORMULA RACERS
              India&nbsp;
            </strong>
            has been progressing since its establishment where students, year
            after year are determined to put their skills, talent, experience
            and expertise in the projects with very limited resources .
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
            className=" my-4 py-2 mx-auto text-xl px-5 md:text-center text-justify"
          >
            We strive day and night to break all the barriers and continuously
            think of new innovative methods to shape the automobile industry.
            Participating in competitions like SAE SUPRA helps us to work harder
            and dream bigger. We are also planning to participate in the
            international FSAE events in upcoming years. Our team is built with
            pure intension of knowledge upgradation. Any kind of sponsorship
            given will be utilized in fully efficient manner. More importantly
            team tree have roots of non-profit basis. Your organisation can
            become a part of our memorable journey, and you can share the pride
            of supporting and molding a team representing the country on a
            global scale in future. We would be highly obliged to have you as
            our sponsor, and we humbly extend the hand of friendship and
            companionship.
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-lg min-h-screen flex flex-col items-center mb-36"
      >
        <h2 className="font-bold md:text-4xl sm:text-2xl pt-5 uppercase text-center text-2xl text-red-500 mb-16">
          Our Sponsors
        </h2>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              width="200px"
              src="https://cdn.shopify.com/s/files/1/0995/4538/t/10/assets/logo.png?v=128234076484141443081543449713"
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://www.dnmshock.com/themes/dnmshock/images/logo.png"
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              width="200px"
              src="https://www.solidworks.com/sites/default/files/2018-02/SWlogo33.svg"
            ></img>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <div className={imgComp}>
            <svg
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              id="Ansys_logo"
              data-name="Ansys logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="207.209"
              height="65.5"
              viewBox="0 0 207.209 65.5"
            >
              <title>Ansys Logo</title>
              <path
                id="Path_12755"
                data-name="Path 12755"
                d="M1282.419,187.015l-21.79,51.76h14.879l20.98-51.76Z"
                transform="translate(-1260.629 -187.015)"
                fill="#ffb71b"
              ></path>
              <path
                id="Path_12756"
                data-name="Path 12756"
                d="M1318.864,196.986q3.118,3.777,3.12,11.4V230.1h-10.955V208.9q0-3.669-1.341-5.354a5.005,5.005,0,0,0-4.172-1.688,7.157,7.157,0,0,0-5.476,2.2,8.208,8.208,0,0,0-2.07,5.867V230.1h-10.953V194.09h10.662v5.133a12.506,12.506,0,0,1,4.9-4.471,14.652,14.652,0,0,1,6.78-1.541q6.385,0,9.505,3.775"
                transform="translate(-1224.172 -178.295)"
                fill="#fff"
              ></path>
              <path
                id="Path_12757"
                data-name="Path 12757"
                d="M1310.85,229.546a22.192,22.192,0,0,1-7.074-3.264l2.9-7.627a24.215,24.215,0,0,0,6.385,3.081,23.283,23.283,0,0,0,7.038,1.1,7.741,7.741,0,0,0,3.953-.845,2.584,2.584,0,0,0,1.414-2.309,2.415,2.415,0,0,0-.981-2.053,10.3,10.3,0,0,0-3.663-1.319l-5.8-1.322q-5.152-1.17-7.581-3.628a9.132,9.132,0,0,1-2.429-6.712,9.644,9.644,0,0,1,1.922-5.939,12.71,12.71,0,0,1,5.439-4.032,20.689,20.689,0,0,1,8.019-1.466,24.208,24.208,0,0,1,7.471,1.172,22.911,22.911,0,0,1,6.528,3.3l-2.9,7.331a19.475,19.475,0,0,0-11.174-3.958,7.676,7.676,0,0,0-3.989.881,2.762,2.762,0,0,0-1.448,2.492,2.174,2.174,0,0,0,.867,1.834,9.425,9.425,0,0,0,3.048,1.245l6.021,1.394q5.445,1.246,7.943,3.777a9.32,9.32,0,0,1,2.505,6.856,9.55,9.55,0,0,1-4.1,8.176q-4.1,2.972-11.282,2.971a33.716,33.716,0,0,1-9.031-1.136"
                transform="translate(-1201.016 -178.295)"
                fill="#fff"
              ></path>
              <path
                id="Path_12758"
                data-name="Path 12758"
                d="M1341.487,229.546a22.211,22.211,0,0,1-7.073-3.264l2.9-7.627a24.163,24.163,0,0,0,6.383,3.081,23.272,23.272,0,0,0,7.035,1.1,7.738,7.738,0,0,0,3.956-.845,2.578,2.578,0,0,0,1.412-2.309,2.414,2.414,0,0,0-.979-2.053,10.294,10.294,0,0,0-3.663-1.319l-5.8-1.322q-5.155-1.17-7.578-3.628a9.124,9.124,0,0,1-2.431-6.712,9.646,9.646,0,0,1,1.922-5.939,12.706,12.706,0,0,1,5.442-4.032,20.675,20.675,0,0,1,8.014-1.466,24.192,24.192,0,0,1,7.474,1.172,22.85,22.85,0,0,1,6.528,3.3l-2.9,7.331a19.469,19.469,0,0,0-11.172-3.958,7.691,7.691,0,0,0-3.991.881,2.764,2.764,0,0,0-1.451,2.492,2.172,2.172,0,0,0,.872,1.834,9.406,9.406,0,0,0,3.046,1.245l6.023,1.394q5.438,1.246,7.943,3.777a9.329,9.329,0,0,1,2.5,6.856,9.546,9.546,0,0,1-4.1,8.176q-4.1,2.972-11.28,2.971a33.7,33.7,0,0,1-9.033-1.136"
                transform="translate(-1158.689 -178.295)"
                fill="#fff"
              ></path>
              <path
                id="Path_12759"
                data-name="Path 12759"
                d="M1280.838,187.693l-7.052,17.4,13.267,32.732h14.889Z"
                transform="translate(-1242.451 -186.061)"
                fill="#fff"
              ></path>
              <path
                id="Union_1"
                data-name="Union 1"
                d="M7.982,49.162,19.7,21.316,14.337,34.062,0,0H10.81l8.934,21.22L28.678,0H39.486L18.793,49.162Z"
                transform="translate(136.01 15.838)"
                fill="#fff"
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                stroke-width="1"
              ></path>
            </svg>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://www.freemansgroup.com/wp-content/uploads/2023/03/Freemans-Logo-png-01.png"
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://cdn.shopify.com/s/files/1/0995/4538/collections/full_bore_logo_flat_red_small_large.jpg?v=1654644715
              "
            ></img>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="
              https://tse1.mm.bing.net/th?id=OIP.MtA2RqhA2lZYPxA_H-Ev1AHaFL&pid=Api&P=0
              
              "
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src=" https://www.bmcairfilters.com/sites/default/files/bmc-air-filters-logo-BE292C09A8-seeklogo.com__1_0.png
             "
            ></img>
          </div>

          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://www.matrix-battery.com/wp-content/uploads/2022/06/matrix-logo.png"
            ></img>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg
              
              "
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://lh3.googleusercontent.com/p/AF1QipN8tKs2lVxDVBXkRxq3r2OjKa--KlfmH8gGrE_n=w1080-h608-p-no-v0"
            ></img>
          </div>

          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://tse4.mm.bing.net/th?id=OIP.Snz5OGZPETsngVBt6Wa35gHaDt&pid=Api&P=0"
            ></img>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp"
            ></img>
          </div>
          <div>
            <img
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              src="https://tse4.mm.bing.net/th?id=OIP.inWtTaju5YHo1KEfH5dMHAHaB-&pid=Api&P=0"
            ></img>
          </div>

          <div>
            <Image
              src="/tsc.jpeg"
              alt="me"
              width="200"
              className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
              height="64"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <img
            className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
            src=" https://www.ebatterydirectory.com/pictures/profile-thumb/214/213530.jpg"
            alt=""
          />
          <img
            className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
            src="https://masterlineworld.com/wp-content/uploads/2022/09/masterline-logo.png"
            alt=""
          />
          <Image
            src="/hos.jpeg"
            alt=""
            width="200"
            className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
            height="64"
          />
        </motion.div> 

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={flexCom}
        >
          <img
            className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
            src="https://kalotiindia.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-25-at-1.24.24-PM-300x129.jpeg"
            alt=""
          />
          <img
            className="aspect-[3/5] object-contain max-h-[300px] md:mx-10 hover:scale-150 animation-all duration-150 delay-75"
            src=" https://media.licdn.com/dms/image/C560BAQGDVuxJH8DkYg/company-logo_200_200/0/1593429383963?e=2147483647&v=beta&t=zoxiORxcQqVwHpTi8N0bIhhU6EUDRykq5xch54PT21g"
            alt=""
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default sponsors;
