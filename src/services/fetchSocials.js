import { sanityClient } from "../../sanity";
import groq from "groq";
export const getSocials = async () => {
  try {
    const query = groq`*[_type == "socials"][0]{
        socials
  }`;
    const data = await sanityClient.fetch(query);

    return data;
  } catch (err) {
    console.log(err);
  }
};
