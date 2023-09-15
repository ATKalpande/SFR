import { createClient } from "next-sanity";
import createImageBuilder from "@sanity/image-url";

import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bcfb3044",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
};

export const sanityClient = createClient(config);

export const urlFor = (source) =>
  createImageBuilder(sanityClient).image(source);

// export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);

export const builder = imageUrlBuilder(sanityClient); // Replace 'client' with your Sanity client instance
