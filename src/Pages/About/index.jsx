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
          <h1 class="title">about</h1>
        </div>

        <div className="about-text">
          <p className="text-wrapper-1-about-page">
            I'm looking for a one-year apprenticeship starting now - let's get in touch !
          </p>

          <p className="text-wrapper-2-about-page">
            I'm Malena, developer apprentice at Ada Tech School since January
            2023. I used to be a cheffe in a restaurant, conceiving and
            designing courses as well as conceiving and designing apps is
            something I am passionate about. I develop with Javascript and Python
            and like to use tools such as React, VueJs, SQL, Flask. I love
            tests and cleancode. Go check my repositories to learn about
            all the tools I'm learning.
          </p>
          <p className="text-wrapper-3-about-page" ref={ref}>
            → &nbsp; download my resume &thinsp;
            <a className="email_download" href="/public/CV.pdf" download="cv_malena_guallar">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
