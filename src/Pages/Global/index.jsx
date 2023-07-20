import { React, useRef } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Project_1 } from "../Project_1/index.jsx";
import { Project_2 } from "../Project_2/index.jsx";
import { Project_3 } from "../Project_3/index.jsx";
import { Project_4 } from "../Project_4/index.jsx";
import { useAnimation } from "framer-motion";
import { useGesture } from "react-use-gesture";

const pages = [Home, About, Project_1, Project_2, Project_3, Project_4];
const totalPages = pages.length;

export const Global = () => {
    const controls = useAnimation();
    const pageRef = React.useRef(0);

    const whereAmI = useGesture({})


    return (
        <>
            <Home />
            <About />
            <Project_1 />
            <Project_2 />
            <Project_3 />
            <Project_4 />

        </>


    )
}