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
                نَحْمَدُهٗ وَنُصَلِّيْ عَلٰ رَسُوْلِهٖ لْكَرِيْمْ
            </h3>

            <h3>شروع الله کے پاک نام سے جو برا مہربان نہایت رحم والا ہے</h3>

            <h4>
                بفیضِ روحانی: قطبے ادونی ، قطب الداوائر اشرف المعاصر ، سید برحق
                حضرت سید شاہ طاہر القادری الحموی رحمۃ اللہ علیہ
            </h4>

            <h4>
                زیرِسرپرستی: امیرالزاکرین شیخِ طریقت پیر ومرشد حضرت علامہ سید
                شاہ صغیر اشرف اشرفی جیلانی
            </h4>
        </section>
    );
}

export default Header;
