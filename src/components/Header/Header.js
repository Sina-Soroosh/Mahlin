import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      {isShowMenu ? (
        <div id="cover-page" onClick={() => setIsShowMenu(false)}></div>
      ) : null}
      <header>
        <div className="content-header container">
          <div className="logo">
            <img alt="Mahin" src="/images/logos/logo-no-background.svg" />
          </div>
          <span className="logo-menu" onClick={() => setIsShowMenu(true)}>
            <i className="fa-solid fa-bars"></i>
          </span>
          <div className={`menu ${isShowMenu ? "active" : ""}`}>
            <ul>
              <li className="close" onClick={() => setIsShowMenu(false)}>
                <i className="fa-solid fa-xmark"></i>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="welcome"
                >
                  خوش آمدید
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="about-us"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="menus"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  منوها
                </Link>
              </li>
              <li>
                <Link
                  to="contact-us"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  تماس با ما
                </Link>
              </li>
              <li className="reservation">
                <div>
                  <Link
                    to="reservations"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    رزرواسیون
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
