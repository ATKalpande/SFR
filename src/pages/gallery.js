import { Layout } from "@/components";
import React from "react";
import { motion } from "framer-motion";

const ImageRowCover = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="min-h-screen flex flex-col items-center justify-start my-20"
    >
      {children}
    </motion.section>
  );
};

export const gallery = () => {
  const galleryImg = `my-8 flex md:flex-row flex-col justify-center text-lg items-center gap-8 md:gap-5`;
  const mrgin = `flex justify-center items-center`;
  const hovimg = `md:hover:w-[85%] hover:w-[95%] hover:border-gray-50 hover:border-5 animation-all md:max-w-[650px] max-w-[400px]`;
  return (
    <Layout>
      <h2 className="font-bold md:text-4xl sm:text-2xl pt-16 py-5 mb-20 uppercase text-center text-2xl text-red-500">
        Gallery
      </h2>
      <ImageRowCover>
        <section className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/1.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/2.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/27.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/4.jpeg"
              alt=""
            />
          </div>
        </section>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/5.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/6.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/7.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/43.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/9.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/10.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/11.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/12.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/13.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/14.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/15.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/16.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/17.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/18.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/19.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/20.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/21.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/22.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/23.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/24.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/25.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/26.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/3.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/28.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/29.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/30.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/31.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/32.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/33.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/34.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/35.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/36.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/37.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/38.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/39.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/40.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
      <ImageRowCover>
        <div className={galleryImg}>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/41.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/42.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/44.jpeg"
              alt=""
            />
          </div>
          <div className={mrgin}>
            <img
              className={hovimg}
              width={200}
              src="galleryPhoto/8.jpeg"
              alt=""
            />
          </div>
        </div>
      </ImageRowCover>
    </Layout>
  );
};

export default gallery;
