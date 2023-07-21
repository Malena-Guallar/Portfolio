import { React, useRef } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Browser_extension } from "../Browser_extension/index.jsx";
import { Social_network } from "../Social_network/index.jsx";
import { E_commerce } from "../E_commerce/index.jsx";
import { Dataviz } from "../Dataviz/index.jsx";
import { motion, useAnimation } from "framer-motion";
import { useGesture } from "react-use-gesture";

const pages = [Home, About, E_commerce, Social_network, Browser_extension, Dataviz];
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