import React from "react";
import "./styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Married</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    {/* <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/groom.png"
                            alt="Groom_img"
                        />
                    </div> */}
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="2"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom1.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom2.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom3.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="info groom-info">
                        <h3>
                            R. Shahid Afreed, <sub>M.Tech.</sub>
                        </h3>
                        <p>
                            <strong>
                                Profession: Mechanical Engineer at Alten India
                                Pvt. Ltd.
                            </strong>
                        </p>
                        <p>
                            Eldest S/O Janab R. Mohammed Shareef Sahab,
                            <br />
                            Grand S/O Janab R. Abdul Khader Sahab(Late),
                            <br />
                            H.No.: 25/341, Havanapet,
                            <br />
                            Adoni.
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/bride.png"
                            alt="Bride_img"
                        />
                    </div>

                    <div className="info">
                        <h3>
                            Shaikh Shamshuddin Gazala Tarannum, <sub>B.Sc.</sub>
                        </h3>
                        <p>
                            Paternal Grand D/O Janab T. Ghouse Mohiuddin Sahab(Late),
                            <br />
                            Maternal Grand D/O Janab Alhaaj Khanbu Abdul Aleem Sahab(Late).                            
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
