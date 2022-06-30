import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./Preloader";
import English from "./English";
import Urdu from "./Urdu";
import BackToTopBtn from "./BackToTopBtn";
import DeveloperInfo from "./DeveloperInfo";
import Audio from "./Audio";
import CustomModel from "./CustomModel";
import Navbar from "./Navbar";
import ChangeLanguage from "./ChangeLanguage.jsx";

import $ from "jquery";

import "aos/dist/aos.css";
import "../styles/App.css";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);

    useEffect(() => {
        $(document).on("scroll", function () {
            if (window.scrollY > 50) {
                $(".navbar").addClass("nav-bg");
            } else {
                $(".navbar").removeClass("nav-bg");
            }
        });
    }, []);

    setTimeout(() => {
        $("#preloader").fadeOut("slow");
    }, 2000);

    return (
        <>
            <Preloader />
            <Navbar />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<CustomModel setIsPlaying={setIsPlaying} />}
                    />
                    <Route
                        path="urdu"
                        element={<Urdu setIsEnglish={setIsEnglish} />}
                    />
                    <Route
                        path="english"
                        element={<English setIsEnglish={setIsEnglish} />}
                    />
                </Routes>
                <ChangeLanguage isEnglish={isEnglish} />
            </Router>
            <DeveloperInfo />
            <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <BackToTopBtn />
        </>
    );
}

export default App;
