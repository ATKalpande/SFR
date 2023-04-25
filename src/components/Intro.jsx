import React from "react";

export const Intro = () => {
  return (
    <div>
     
      <section className="flex item-center justify-around pt-6 mt-10 border min-h-0 text-justify ">
        <div className="lef-sec w-1/2 ps-8  ">
          <h2 className="text-center font-bold ">Introduction</h2>
          <div className="font-normal  tracking-normal">
            <p className="text-slate-600 transition ease-in delay-100 hover:-translate-y-1 hover:scale-10 hover:font-semibold duration-300  ">
              Orion Racing India is the official Formula SAE team of K. J.
              Somaiya College of Engineering, Mumbai. The team is formed by 60+
              undergraduate students from various engineering departments whose
              vision is to achieve something tangible at an undergraduate level.
            </p>
            <br />
            

            <p>
              Being Motorsports enthusiasts and budding engineers, the students
              take up a task of designing and fabricating a single-seater
              formula prototype race-car and participate at International
              Formula Student events viz. Formula Student Germany and Formula
              Student India. Formula Student competitions get participation from
              a number of teams from around the globe. Thus this gives Orion
              Racing India exposure to world-class engineering and helps develop
              the engineering practices of Indian students that are going to be
              a vital part in development of technology in India.
            </p>
          </div>
        </div>
        <div className="w-1/2 ps-8  ">
          <img
            className="object-fill"
            src="https://picsum.photos/500/300/?blur=2"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};
