import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../styles/CustomModel.css";

function CustomModel(props) {
    const { setIsPlaying } = props;

    function handleClick() {
        $("#modal").fadeOut();

        document.getElementById("audio").play();

        setIsPlaying(true);
    }

    useEffect(() => {
        $("body").css("overflow", "hidden");

        const audio = document.getElementById("audio");
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false); // eslint-disable-next-line
    }, []);

    return (
        <section id="modal">
            <div className="modal-content">
                <div className="modal-heading">
                    <span className="modal-title">
                        Turrumturri Family's Wedding Invitation
                    </span>
                </div>
                <div className="modal-body">
                    <p>From</p>
                    <span className="modal-description">
                        Mrs. & Mr. Alhaaj T. Shamshuddin Asshrafi Sahab
                    </span>
                </div>
                <div className="modal-footer">
                    <Link
                        to="/urdu"
                        className="btn btn-primary btn-urdu"
                        onClick={handleClick}
                    >
                        اردو
                    </Link>
                    <Link
                        to="/english"
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        English
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CustomModel;
