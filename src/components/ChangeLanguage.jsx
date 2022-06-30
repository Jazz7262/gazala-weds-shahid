import React from "react";
import { Link } from "react-router-dom";
import "../styles/ChangeLanguage.css";

function ChangeLanguage(props) {
    const { isEnglish } = props;
    return (
        <section className="change-lang-link">
            {isEnglish ? (
                <Link to="/urdu" className="urdu">
                    ار
                </Link>
            ) : (
                <Link to="/english">En</Link>
            )}
        </section>
    );
}

export default ChangeLanguage;
