import { sanityClient } from "../../sanity";
import groq from "groq";
export const getFundingPage = async () => {
  try {
    const query = groq`*[_type == "fundingPage"][0]{
        aboutComponent,
        supportHierarchy,
        budgetAnalysisComponent,
        fundingFormComponent     
    }`;
    const data = await sanityClient.fetch(query);
    // console.log("data", data);

    return data;
  } catch (err) {
    console.log(err);
  }
};
