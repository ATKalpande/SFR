import React from "react";
import { motion } from "framer-motion";
export const GoogleMap = ({ location, zoom = 15 }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCpJCC1gVE6IrBSBBVAcrE5XFuYUdGyoBM&q=${encodeURIComponent(
    location
  )}&zoom=${zoom}`;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.5,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.3 }}
      className="w-full md:max-w-[75%] h-96"
    >
      <iframe
        title="Google Map"
        className="w-full h-full rounded-lg"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      />
    </motion.div>
  );
};
//
