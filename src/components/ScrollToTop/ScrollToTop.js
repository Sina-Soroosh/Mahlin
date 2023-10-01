import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { Link } from "react-scroll";

function ScrollToTop() {
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 400) {
        setIsShowScrollToTop(true);
      } else {
        setIsShowScrollToTop(false);
      }
    });
  }, []);

  return (
    <Tooltip
      title="رفتن به بالا"
      position="top"
      arrow
      size="big"
      className={`scroll-to-top ${isShowScrollToTop ? "" : "hidden"}`}
    >
      <Link spy={true} smooth={true} duration={500} to="welcome">
        <span>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </Link>
    </Tooltip>
  );
}

export default ScrollToTop;
