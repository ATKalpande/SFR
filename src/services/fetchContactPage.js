import { sanityClient } from "../../sanity";
import groq from "groq";
export const getContactPage = async () => {
  try {
    const query = groq`*[_type == "contactPage"][0]{
        contactUsComponent,
        locationComponent,
    }`;
    const data = await sanityClient.fetch(query);

    return data;
  } catch (err) {
    console.log(err);
  }
};
