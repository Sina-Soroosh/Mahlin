import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import AboutUs from "./components/AboutUs/AboutUs";
import Menus from "./components/Menus/Menus";
import ContactUs from "./components/ContactUs/ContactUs";
import Reservations from "./components/Reservations/Reservations";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div id="welcome">
        <Header />
        <Slider />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="menus">
        <Menus />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <div id="reservations">
        <Reservations />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
