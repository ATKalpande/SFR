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
          content=""
        />
        <meta property="og:image" content="" />
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
