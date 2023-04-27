import React from "react";
import carouselImages from "./data";

import Carousel from "react-elastic-carousel";
import Link from "next/link";

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
    itemsToShow: 5,
  },
  {
    itemsToShow: 6,
  },
  {
    itemsToShow: 7,
  },
  {
    itemsToShow: 8,
  },
  {
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
        {carouselImages.map((d) => {
          return (
            <article key={d.id} className="flex items-center justify-center">
              <Link href="#" className="flex items-center justify-center">
                <img
                  src={d.image}
                  alt={d.description}
                  className="aspect-[3/2] object-cover"
                />
                <h3 className="text-bold text-center mt-2">{d.text}</h3>
              </Link>
            </article>
          );
        })}
      </Carousel>
    </>
  );
};
