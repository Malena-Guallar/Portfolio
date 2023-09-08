import React, { useEffect } from "react";
import "../About/style.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextAnimation from "../../kreativetext";
import AnimationScroll from "../../kreativescroll";

const pageVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 3, type: "spring" } },
  hidden: { opacity: 0, y: 10 },
};

export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });



  new AnimationScroll({
    selector: ".div-wrapper-about-page",
    trigger: 0,
    transform: "20xvw 0.9s",
    easing: "ease-in-out",
    duration: 2,
    onLoad: false,
    scrollSpeed: 0.7,
    pauseOnScroll: true
});


  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("in view");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="about">
      <div className="div-wrapper-about-page">
        <div className="title-wrapper">
          {/* <img className="star" alt="Image" src="./images/image1.svg" /> */}
          <motion.h1
            class="title"
            // variants={pageVariants}
            // initial="hidden"
            // ref={ref}
            // animate={controls}
          >
            about
          </motion.h1>
        </div>

        <motion.div
          className="about-text"
          // variants={pageVariants}
          // initial="hidden"
          // ref={ref}
          // animate={controls}
        >
          <p className="text-wrapper-1-about-page">
            I'm looking for a one-year apprenticeship starting between october
            23 and february 24 - let's get in touch !
          </p>

          <p className="text-wrapper-2-about-page">
            I'm Malena, developer apprentice at Ada Tech School since January
            2023. I used to be a cheffe in a restaurant, conceiving and
            designing courses as well as conceiving and designing apps is
            something I am passionate about. I develop with <b>Javascript</b>{" "}
            and like to use tools such as <b>React, NextJs, Jest</b>. I love{" "}
            <b>tests and cleancode</b>. Go check my repositories to learn about
            all the tools I'm learning.
          </p>
          <p className="text-wrapper-3-about-page">
            → &nbsp; download my resume &thinsp;
            <a href="/public/CV.pdf" download="cv_malena_guallar">
              here
            </a>
          </p>
        </motion.div>
      </div>

      <div className="about_infos_container">
        {/* <div className="social_container">
                    <img className="star2" src="./images/image1.svg" />
                    <h4 className="social_title">SOCIAL</h4>
                    <div className="logos_wrapper_1">
                        <table>
                            <tr>
                                <td><img src="./images/git.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://github.com/Malena-Guallar">github</a></td>
                            </tr>
                            <tr>
                                <td><img src="./images/linkedin.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/malenaguallar/">linkedin</a></td>
                            </tr>
                            <tr>
                                <td><img src="./images/insta.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/malena100accent">instagram</a></td>
                            </tr>
                        </table>
                    </div>
                </div> */}
      </div>
    </div>
  );
};
