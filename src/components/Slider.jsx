import React from "react";
import ddata from "./data";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  {
    itemsToShow: 1,
  },
  {
    itemsToShow: 2,
  },
  {
    itemsToShow: 3,
  },
  {
    itemsToShow: 4,
  },
  {
    // width:1,
    itemsToShow: 5,
  },
  {
    // width:300,
    itemsToShow: 6,
  },
  {
    // width:2,
    itemsToShow: 7,
  },
  {
    // width:120,
    itemsToShow: 8,
  },
  {
    // width:120,
    itemsToShow: 9,
  },
];

export const Slider = () => {
  return (
    <>
      <Carousel
        className="flex flex-col items-center justify-center"
        enableAutoPlay
        autoPlaySpeed={1500}
        breakPoints={breakPoints}
      >
        {ddata.map((d) => {
          return (
            <article key={d.id}>
              <a href="#">
                <img
                  src={d.image}
                  alt={d.description}
                  className="aspect-[3/2] object-cover"
                />
                <h3 className="text-bold text-center mt-2">{d.text}</h3>
              </a>
            </article>
          );
        })}
      </Carousel>
    </>
  );
};
