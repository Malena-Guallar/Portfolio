import React, { useEffect } from "react";
import "../About/style.css";
import { useInView } from "react-intersection-observer";
import TextAnimation from "../../kreativetext";
import { useTheme } from "../../ThemeProvider";

export const About = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ delay: 100 });

  useEffect(() => {
    new TextAnimation({
      selector: [
        ".title",
        ".text-wrapper-1-about-page",
        ".text-wrapper-2-about-page",
      ],
      effect: "shuffle",
      speed: 50,
      duration: 0.5,
      trigger: 0,
      onLoad: true,
      hover: false,
    });
  }, [inView]);

  return (
    <div className={`about ${theme}`}>
      <div className="div-wrapper-about-page">
        <div className="title-wrapper">
          {/* <img className="star" alt="Image" src="./images/image1.svg" /> */}
          <h1 class="title">about</h1>
        </div>

        <div
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
            something I am passionate about. I develop with <b>Javascript</b>
            and like to use tools such as <b>React, NextJs, Jest</b>. I love
            <b>tests and cleancode</b>. Go check my repositories to learn about
            all the tools I'm learning.
          </p>
          <p className="text-wrapper-3-about-page" ref={ref}>
            → &nbsp; download my resume &thinsp;
            <a href="/public/CV.pdf" download="cv_malena_guallar">
              here
            </a>
          </p>
        </div>
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
