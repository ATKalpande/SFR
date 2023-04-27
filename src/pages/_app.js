import "@/styles/globals.css";
import { Manrope } from "@next/font/google";
const manrope = Manrope({
  subsets: ["cyrillic-ext"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --manrope-font: ${manrope.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />;
    </>
  );
}
