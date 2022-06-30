import React, { useEffect } from "react";

import Header from "./urdu-components/Header.jsx";
import Slide from "./urdu-components/Slide.jsx";
import UrduContent from "./urdu-components/UrduContent.jsx";
import Couple from "./urdu-components/Couple.jsx";
import Timeline from "./urdu-components/Timeline";
import CountDown from "./urdu-components/CountDown.jsx";
import InviteNote from "./urdu-components/InviteNote";
import BabiesQuote from "./urdu-components/BabiesQuote.jsx";

import "../styles/Urdu.css";

import $ from "jquery";

import AOS from "aos";

function Urdu(props) {
    const { setIsEnglish } = props;

    useEffect(() => {
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        setIsEnglish(false);
    }, []);
    return (
        <section id="urdu-section">
            <Header />
            <Slide />
            <UrduContent />
            <Couple />
            <Timeline />
            <CountDown />
            <InviteNote />
            <BabiesQuote />
        </section>
    );
}

export default Urdu;
