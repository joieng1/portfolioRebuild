import React from "react";
import "./App.css";
import Home from "./components/Home";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/NavagationBar";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
