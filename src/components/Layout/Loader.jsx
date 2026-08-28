import React from "react";
import { motion } from "framer-motion";

import SibiLogo from "../../../public/assets/img/fav-icon.png";

export default function Loader() {
  return (
    <div className="sgc-loader">
      <motion.div
        className="sgc-loader-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* Spinner */}
        <motion.div
          className="sgc-loader-spinner"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <>
          <span>
          <img
            src={SibiLogo}
            alt="Sibi Global Corporation"
          /></span>
          </>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}