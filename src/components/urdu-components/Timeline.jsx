import React from "react";
import "./styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h5> بفضلہ تعالی طے پایا ہے</h5>
            <h1 className="inshaallaah">انشآ الله</h1>
            <div className="timeline-wrapper">
                <div className="row">
                    <div className="col-lg-6 left" data-aos="fade-down">
                        <h1>شكرانه</h1>
                        <p>
                            بتاریخ 2022-07-23 ، بروز ہفتہ
                            <br />
                            ذی الحجہ 23 ، 1443 ہجری
                            <br />
                            بوقت: 09:00 بجے شب ۔
                        </p>
                    </div>
                    <div className="col-lg-6 right" data-aos="fade-down"></div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    ></div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        <h1>نکاح</h1>
                        <p>
                            بتاریخ 2022-07-24 ، بروز اتوار
                            <br />
                            ذی الحجہ 24 ، 1443 ہجری
                            <br />
                            بوقت: 12:45 بجے دن ۔
                        </p>
                        <h2>:بمقام</h2>
                        <p>
                            ، انٹرنیشنل فنکشن ہال
                            <br />
                            ، تیسری روڈ ، ایس،کے،ڈی، کالونی
                            <br />
                            ادونی ۔
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <h1>وليمه</h1>
                        <p>
                            بتاریخ 2022-07-25 ، بروز  پیر
                            <br />
                            ذی الحجہ 25 ، 1443 ہجری
                            <br />
                            بوقت: 02:00 بجے دوپہر ۔
                        </p>
                        <h2>:بمقام</h2>
                        <p>
                            ، انٹرنیشنل فنکشن ہال
                            <br />
                            ، تیسری روڈ ، ایس،کے،ڈی، کالونی
                            <br />
                            ادونی ۔
                        </p>
                    </div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
