import { sanityClient } from "../../sanity";
import groq from "groq";
export const getHomepage = async () => {
  try {
    const query = groq`*[_type == "homepage"][0]{
        heroComponent,
        imageSliderComponent,
          achievementsComponent,
          
    }`;
    const data = await sanityClient.fetch(query);
    console.log("data", data);

    return data;
  } catch (err) {
    console.log(err);
  }
};
