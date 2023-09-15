import React from "react";

import Carousel from "react-elastic-carousel";
import Link from "next/link";

import { urlFor } from "../../sanity";

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

export const Slider = ({ images }) => {
  return (
    <>
      <Carousel
        className="flex flex-col items-center "
        enableAutoPlay
        autoPlaySpeed={1500}
        breakPoints={breakPoints}
      >
        {images.map((img) => {
          return (
            <article
              key={img._key}
              className="flex items-center justify-center"
            >
              <Link href="#" className="flex items-center justify-center">
                <img
                  src={urlFor(img.image).url()}
                  alt={img.altText}
                  title={img.title}
                  className="aspect-[3/2] object-cover"
                />
              </Link>
            </article>
          );
        })}
      </Carousel>
    </>
  );
};
