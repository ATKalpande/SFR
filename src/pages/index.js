import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen py-5">
      <Navbar />
      <Footer />
    </main>
  );
}
