import { Layout } from "@/components";
import React from "react";

export const sponsors = () => {
  const flexCom = `mt-10 mb-7 flex align-center justify-center ml-20 pr-14 gap-20`;
  return (
    <Layout>
      <>
        <div className=" flex flex-col justify-center text-xl ml-34 text-justify h-full ">
          <h2 className="font-bold text-lg text-center text-gray-200 ">WHY SPONSOR US</h2>
          <div className="text-center p-4 ml-12 mr-12">
          <h2 className="text-center mb-6 ">
            SAHYADRI FORMULA RACERS has been progressing since its establishment
            where students, year after year are determined to put their skills,
            talent, experience and expertise in the projects with very limited
            resources .
          </h2>
          <h2 className="text-center ">
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
          </h2>
          </div>
          
        </div>
        
        <h2 className="text-center text-2xl underline italic ">Our Sponsors</h2>
        <section className={flexCom}>
          <div>
            <img
              width="200px"
              src="https://cdn.shopify.com/s/files/1/0995/4538/t/10/assets/logo.png?v=128234076484141443081543449713"
            ></img>
          </div>
          <div>
            <img
              className="w-20"
              src="https://www.dnmshock.com/themes/dnmshock/images/logo.png"
            ></img>
          </div>
          <div>
            <img
              className="align-center mt-7"
              width="200px"
              src="http://www.orion-racing.com/assets/img/img_sponsors/3DS_SWLogo.png"
            ></img>
          </div>
        </section>
        <div className={flexCom}>
          <div>
            <img
              width="200px"
              src="http://www.orion-racing.com/assets/img/img_sponsors/ANSYS_logo.png"
            ></img>
          </div>
          <div>
            <img
              width="200px"
              src="http://www.orion-racing.com/assets/img/img_sponsors/ANSYS_logo.png"
            ></img>
          </div>
          <div>
            <img
              width="200px"
              src="http://www.orion-racing.com/assets/img/img_sponsors/ANSYS_logo.png"
            ></img>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default sponsors;
