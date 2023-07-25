import React from "react";
import "/src/Pages/Home/style.css";
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <div className="container">

      <div className="home">
        <motion.h1 className="text-wrapper" initial={{ x: 1000, y: 1000.5 }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.5 }}> 
          Malena Guallar </motion.h1>

        <motion.div className="text-wrapper-2" initial={{ x: -1000, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
          FRONT END DEVELOPER ___</motion.div>

        <motion.div className="text-wrapper-3" initial={{ x: -2000, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
          based in Paris</motion.div>

        <motion.p className="p" initial={{ x: 0, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}> 
          hi, welcome to my portfolio</motion.p>

        <motion.p className="text-wrapper-4" initial={{ x: 400, y: 600}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
          I’m looking for a one year apprenticeship.</motion.p>

        <motion.p className="text-wrapper-5" initial={{ x: -400, y: -600}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
          I’m flexible ! I can start between october and february.</motion.p>

        <motion.img className="image" alt="Image" src="portfolio/_Portfolio/dist/images/image 1.svg" animate={{rotate: [0, 90, 180, 270, 360]}} transition={{duration: 10, repeat: Infinity, ease:"linear"}}/>

      </div>
    </div>
  );
};