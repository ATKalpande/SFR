import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Intro,Achives,Suppo, Navbar  } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen py-5">
      <Navbar />
      <Intro />
      <Achives/>
      <Suppo/>
      <Footer />
    </main>
  );
}
