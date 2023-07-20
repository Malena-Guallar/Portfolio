import { React, useRef } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Project_1 } from "../Project_1/index.jsx";
import { Project_2 } from "../Project_2/index.jsx";
import { Project_3 } from "../Project_3/index.jsx";
import { Project_4 } from "../Project_4/index.jsx";
import { motion, useAnimation } from "framer-motion";
import { useGesture } from "react-use-gesture";

const pages = [Home, About, Project_1, Project_2, Project_3, Project_4];
const totalPages = pages.length;
const sensitivity = 2;

export const Global = () => {
    const controls = useAnimation();
    const pageRef = useRef(0);
    const scrollCounter = useRef(0);

    const whereAmI = useGesture({
        onWheel: ({ delta: [, deltaY] }) => {
            scrollCounter.current += Math.sign(deltaY);

            if (scrollCounter.current >= sensitivity && pageRef.current < totalPages - 1) {
                pageRef.current++;
                scrollCounter.current = 0;
            } else if (scrollCounter.current <= -sensitivity && pageRef.current > 0) {
                pageRef.current--;
                scrollCounter.current = 0;
            }
            scrollToPage(pageRef.current);
        },
    });

    const scrollToPage = (pageIndex) => {
        controls.start({
            y: `-${pageIndex * 100}vh`,
            transition: {type: "tween", duration: 0.5 },
        });
    };


    return (
        <div {...whereAmI()} style={{ height: "100vh", overflow: "hidden"}}>
            <motion.div
            style={{ display: "flex", flexDirection: "column" }}
            animate={controls}
            >
                {pages.map((Page, index) => (
                    <div key={index} style={{minHeight: "100vh"}}>
                        <Page />
                    </div>
                ))};

            </motion.div>

        </div>


    )
}