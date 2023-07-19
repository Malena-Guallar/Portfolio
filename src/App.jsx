import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Pages/Home/index.jsx"
import {About} from "./Pages/About/index.jsx"
import {Project_1} from "./Pages/Project_1/index.jsx"
import "./App.css"


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project_1" element={<Project_1 />} />
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App ;