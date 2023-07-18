import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Pages/Home/index.jsx"
import "./App.css"


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App ;