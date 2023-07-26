import { React, useRef, useEffect } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Browser_extension } from "../Browser_extension/index.jsx";
import { Social_network } from "../Social_network/index.jsx";
import { E_commerce } from "../E_commerce/index.jsx";
import { Dataviz } from "../Dataviz/index.jsx";
import { motion, useAnimation } from "framer-motion";
// import { useGesture } from "react-use-gesture";
import { Footer } from "../Footer";

const pages = [Home, About, E_commerce, Social_network, Browser_extension, Dataviz, Footer];
const totalPages = pages.length;
const sensitivity = 0.05;

export const Global = () => {
    const controls = useAnimation();
    const pageRef = useRef(0);
    const scrollCounter = useRef(0);
    
    
    const scrollToPage = (pageIndex) => {
        controls.start({
            y: `-${pageIndex * 100}vh`,
            transition: {type: "tween", duration: 0.5 },
        });
    };

    const handleScroll = (event) => {

        let deltaY;

        if ("deltaY" in event) {
            deltaY = event.deltaY;
        } else if (event.touches.length > 0){
            deltaY = -(event.touches[0].clientY - event.touches[0].clientYStart);
        } else {
            return;
        }

        scrollCounter.current += deltaY * sensitivity;
        
        if (scrollCounter.current >= sensitivity && pageRef.current < totalPages - 1) {
            pageRef.current++;
            scrollCounter.current = 0;
        } else if (scrollCounter.current <= -sensitivity && pageRef.current > 0) {
            pageRef.current--;
            scrollCounter.current = 0;
        }
            scrollToPage(pageRef.current);
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        
        window.addEventListener("touchstart", (e) => {
            const touchStartY = e.touches[0].clientY;
            
            const handleTouchMove = (event) => {
                const touchY = event.touches[0].clientY;
                const deltaY = touchStartY - touchY;
                handleScroll({ deltaY });
            };

            const handleTouchEnd = () => {
                window.removeEventListener("touchmove", handleTouchMove);
                window.removeEventListener("touchend", handleTouchEnd);
            };
            
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("touchend", handleTouchEnd);
        });
        
        
        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleScroll);
        };
    }, []);


return (
    <div style={{ height: "100vh", overflow: "hidden"}}>
            <motion.div
            style={{ display: "flex", flexDirection: "column" }}
            animate={controls}
            >
                {pages.map((Page, index) => (
                    <div key={index} style={{minHeight: "100%"}}>
                        <Page />
                    </div>
                ))}
            </motion.div>
        </div>
)
};


// const whereAmI = useGesture({
//     onWheel: ({ delta: [, deltaY] }) => {
//         scrollCounter.current += Math.sign(deltaY);

//         if (scrollCounter.current >= sensitivity && pageRef.current < totalPages - 1) {
//             pageRef.current++;
//             scrollCounter.current = 0;
//         } else if (scrollCounter.current <= -sensitivity && pageRef.current > 0) {
//             pageRef.current--;
//             scrollCounter.current = 0;
//         }
//         scrollToPage(pageRef.current);
//     },
// });