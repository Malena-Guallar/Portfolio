import React from "react";
import "/src/Pages/Home/style.css";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <div className="home">
        <motion.img
          className="image"
          alt="Image"
          src="./images/image1.svg"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="div-wrapper-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-wrapper-1">FRONT END DEVELOPER</p>
          <motion.button
            className="text-wrapper-2"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
          </motion.button>
        </motion.div>

        <div className="div-wrapper-1">
          <motion.h1
            className="text-wrapper-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Malena Guallar
          </motion.h1>
          <motion.p
            className="text-wrapper-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            portfolio
          </motion.p>
        </div>

        <motion.div
          className="div-wrapper-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="div-wrapper-4">
            <motion.p className="text-wrapper-6">
              malena.guallar@gmail.com
            </motion.p>

            <p className="text-wrapper-7">GITHUB &emsp; LINKEDIN</p>
          </div>

          <motion.p className="text-wrapper-5">
            all rights reserved © 2023 Malena Guallar
          </motion.p>
        </motion.div>

        {/* <div className="seperation-line-div">
          <p className="seperation-line">_________</p>

        </div> */}
      </div>
    </div>
  );
};
