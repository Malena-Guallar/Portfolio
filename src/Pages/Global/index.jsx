import React, { useRef, useState, useEffect } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Browser_extension } from "../Browser_extension/index.jsx";
import { Social_network } from "../Social_network/index.jsx";
import { E_commerce } from "../E_commerce/index.jsx";
import { Dataviz } from "../Dataviz/index.jsx";
import { Footer } from "../Footer";
import { Micro_blogging } from "../Micro_blogging";
import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextAnimation from "../../kreativetext";
import "./style.css";

const pages = [
  Micro_blogging,
  E_commerce,
];

export const Global = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      if (screenWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app_container">
      <Home />
      <About />
      {mobile ? <NormalScroll /> : <HorizontalScroll />}
      <Footer />
    </div>
  );
};

const NormalScroll = () => {
  const targetRef = useRef(null);

  return (
    <>
      <h1 className="projects">projects</h1>
      <div className="pages_container" ref={targetRef}>
        <div className="pages_wrapper">
          {pages.map((Page, index) => (
            <div className="page" key={index}>
              <Page />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const HorizontalScroll = () => {
  const [ref, inView] = useInView({ });

  useEffect(() => {
    new TextAnimation({
      selector: ".projects",
      effect: "flip",
      speed: 100,
      duration: 1,
      trigger: 0,
      invisibleOutsideTrigger: true,
      onLoad: true,
      hover: false,
    });
  }, [inView]);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-130%"]);

  return (
    <>
      <div className="pages_container" ref={targetRef}>
        <h1 className="projects" ref={ref}>
          projects
        </h1>
        <motion.div style={{ x }} className="pages_wrapper">
          {pages.map((Page, index) => (
            <div className="page" key={index}>
              <Page />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
