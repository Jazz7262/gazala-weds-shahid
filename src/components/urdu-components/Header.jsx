import React from "react";
import "./styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3 className="ayat">
                نَحْمَدُهٗ وَنُصَلِّيْ عَلٰی رَسُوْلِهٖ لْكَرِيْمْ
            </h3>

            <h3> الله کے نام سے شروع جو نہایت مہربان رحم والا </h3>

            <h4>
                بفیضِ روحانی: قطب ادونی ، قطب الدوائر اشرف المعاصر ، سید برحق
                حضرت سید شاہ طاہر القادری الحموی رحمۃ اللہ علیہ
            </h4>

            <h4>
                زیرِسرپرستی: امیرالذاکرین شیخِ طریقت پیر ومرشد حضرت علامہ سید
                شاہ صغیر اشرف اشرفی الجیلانی
            </h4>
        </section>
    );
}

export default Header;
