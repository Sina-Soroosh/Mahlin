import React, { useEffect, useState } from "react";
import "./Slider.css";
import { Link } from "react-scroll";

function Slider() {
  const [background, setBackground] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setBackground((prevBackground) =>
        prevBackground === 4 ? 1 : prevBackground + 1
      );
    }, 5000);
  }, []);

  return (
    <div className={`slider img-${background}`}>
      <div className="container">
        <div className="text-slider">
          <p data-aos="fade-down">به رستوران مهلین خوش آمدید</p>
          <p className="details" data-aos="fade-up">
            بهترین رستوران موجود در شیراز ، آنلاین میز خود را <br /> رزرو کنید
            یا تماس بگیرید 12 34 567 (071)
          </p>
        </div>
        <div className="buttons-slider">
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="about-us"
            className="btn btn-about-us"
            data-aos="fade-left"
          >
            درباره ما
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="reservations"
            className="btn btn-reservation"
            data-aos="fade-right"
          >
            رزرواسیون
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;
