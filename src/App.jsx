import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "./Pages/Global/index.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Global />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};



export default App;
