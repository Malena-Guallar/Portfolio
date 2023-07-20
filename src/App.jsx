import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Pages/Home/index.jsx"
import {About} from "./Pages/About/index.jsx"
import {Project_1} from "./Pages/Project_1/index.jsx"
import {Project_2} from "./Pages/Project_2/index.jsx"
import { Project_3 } from "./Pages/Project_3/index.jsx";
import "./App.css"


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />  
        <Route path="/about" element={<About />} />
        <Route path="/project_1" element={<Project_1 />} />
        <Route path="/project_2" element={<Project_2 />} />
        <Route path="/project_3" element={<Project_3 />} />     
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App ;