import { sanityClient } from "../../sanity";
import groq from "groq";
export const getSponsorsPage = async () => {
  try {
    const query = groq`*[_type == "sponsorPage"][0]{
        whyToSponsorComponent,
        sponsorLogosTitle,
        sponsorsLogosRow
    }`;
    const data = await sanityClient.fetch(query);
    return data;
  } catch (err) {
    console.log(err);
  }
};
