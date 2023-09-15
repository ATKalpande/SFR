import Head from "next/head";

import { Inter } from "next/font/google";
import { Intro, Achives, Layout } from "@/components";
import { getHomepage, getSocials } from "@/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, socials }) {
  return (
    <div>
      <Head>
        <title>TEAM SFR | GCOEARA</title>
        <meta
          name="description"
          property="og:description"
          key="desc"
          content="TEAM SAHYADRI FORMULA RACERS INDIA is a student run, non-profit racing team based in Govt. College Of Engineering & Research Avasari Pune. We are a team of Highly Exeburant and hardworking race car enthusiasts from various streams and we develop, design and manufacture a student formula style car to take part in FSAE Competition organized by SAE INDIA"
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/bcfb3044/production/a5ea9580ede03a29ba1fb1b66fc06de5938ef605-1280x853.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen py-5 font-primary">
        <Layout socials={socials.socials}>
          <Intro
            heroText={data.heroComponent}
            sliderImages={data.imageSliderComponent.images}
          />
          <Achives achievements={data.achievementsComponent.achievements} />
        </Layout>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getHomepage();
  const socials = await getSocials();
  return {
    props: {
      data,
      socials,
    },
    revalidate: 1,
  };
}
