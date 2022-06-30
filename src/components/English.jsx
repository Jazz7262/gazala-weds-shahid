import React, { useEffect } from "react";

import Header from "./english-components/Header";
import Slide from "./english-components/Slide";
import Couple from "./english-components/Couple";
import InvitationQuote from "./english-components/InvitationQuote";
import Timeline from "./english-components/Timeline";
import CountDown from "./english-components/CountDown";
import Compliments from "./english-components/Compliments";
import InviteNote from "./english-components/InviteNote";
import BabiesQuote from "./english-components/BabiesQuote";

import $ from "jquery";

import AOS from "aos";

function English(props) {
    const { setIsEnglish } = props;

    useEffect(() => {
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        setIsEnglish(true);
    }, []);

    return (
        <>
            <Header />
            <Slide />
            <Couple />
            <InvitationQuote />
            <BabiesQuote />
            <Timeline />
            <CountDown />
            <Compliments />
            <InviteNote />
        </>
    );
}

export default English;
