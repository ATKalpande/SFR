import { Layout } from "@/components";
import React from "react";
import { Achives } from "@/components";
import { Hierarchy } from "@/components/hierarchy";

export const CroudFunding = () => {
 
  const tetxprop = `"text-gray-600 my-4 py-2 hover:text-gray-300 `;
  return (
    <Layout>
      <>
        <section className="text-center text-xl block    mx-24 my-6">
          <h1 className="text-2xl  underline  ">ABOUT US</h1>
          <p className={tetxprop}>
            TEAM SAHYADRI FORMULA RACERS India is the official Formula SAE team
            of Govt. College of Engineering & Research Avasari, Pune . The team
            is formed by 40+ undergraduate engineering students from various
            departments whose vision is to achieve something pre-eminent at
            undergraduate level.
          </p>
          <p className={tetxprop}>
            Being Motorsports enthusiasts and future engineers, the students
            take up the task of designing and manufacturing a student formula
            race-car and participate in the event SAE SUPRA organised by SAE
            INDIA . The event will be held on the only f1 track in India i.e.
            THE BUDDHA INTERNATIONAL CIRCUIT. Formula Student competitions get
            participation from a number of teams from around the country . Thus
            this gives TEAM SAHYADRI FORMULA RACERS exposure to world-class
            engineering and helps develop the engineering practices of students
            that are going to be a vital part in development of technology in
            India.
          </p>
        </section>

        <div className="flex justify-around">
          <div>
            <h1 className="font-bold ml-5 text-3xl mb-4 underline decoration-pink-300">
             How Can You  Support US
            </h1>
            <span>Hover / click</span>
            < Hierarchy />
          </div>


         
          {/* <div className="ac ml-20 pl-12">
              <Achives />
        </div> */}

          <div >
            <img className="rounded "  width="300px" src="/budjet.jpeg" />
            <img className="rounded my-6" width="300px" src="/pie.jpeg" />
          </div>
        </div>

        <div className=" my-4 p-2 flex justify-center align-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScT5aPNvA76sjXfRyPY1FHZP1pOEdXJFTgoMyOwbh5XStmfsA/viewform?embedded=true" width="640" height="1658" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        
      </>
    </Layout>
  );
};

export default CroudFunding;
