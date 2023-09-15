import { sanityClient } from "../../sanity";
import groq from "groq";
export const getGalleryPage = async () => {
  try {
    const query = groq`*[_type == "gallaryPage"][0]{
        gallaryComponent,
        gallaryImagesRows,
    }`;
    const data = await sanityClient.fetch(query);

    return data;
  } catch (err) {
    console.log(err);
  }
};
