import React from "react";
import "./App.css";
import Home from "./components/Home";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/NavagationBar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
