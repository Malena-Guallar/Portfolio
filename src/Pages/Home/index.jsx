import React from "react";
import "/src/Pages/Home/style.css";
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <div className="container">

      <div className="home">
        <div className="text-wrapper-1" >
          <motion.div initial={{ x: -1000, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
            FRONT END DEVELOPER ___</motion.div>
        </div>
        <br></br>
        <div className="div-wrapper-1">
          <motion.h1 className="text-wrapper-2" initial={{ x: 1000, y: 1000.5 }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.5 }}> 
            Malena Guallar </motion.h1>

          <motion.img className="image" alt="Image" src="./images/image1.svg" animate={{rotate: [0, 90, 180, 270, 360]}} transition={{duration: 10, repeat: Infinity, ease:"linear"}}/>

          <motion.p className="text-wrapper-3" initial={{ x: 0, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}> 
            hi, welcome to my portfolio</motion.p>
        </div>

        <div className="div-wrapper-2">
          <motion.p className="text-wrapper-4" initial={{ x: 400, y: 600}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
            I’m looking for a one year apprenticeship.</motion.p>

          <motion.p className="text-wrapper-5" initial={{ x: -400, y: -600}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
            I’m flexible ! I can start between october and february.</motion.p>

          <motion.div className="text-wrapper-6" initial={{ x: -2000, y:-1000}} animate={{x: 0, y:0}} transition={{duration: 0.5}}>
            based in Paris</motion.div>
        </div>

      </div>
    </div>
  );
};