import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SliderImages.css";
import data from "../../data";

function SliderImages({ id, setID }) {
  const sliderRef = useRef();

  const prevSlider = useCallback(() => {
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextSlider = useCallback(() => {
    sliderRef.current.swiper.slideNext();
  }, []);

  return ReactDOM.createPortal(
    <div className="slider-images">
      <span className="next-slide" onClick={nextSlider}>
        <i className="fa-solid fa-chevron-left"></i>
      </span>
      <span className="prev-slide" onClick={prevSlider}>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
      <div className="container">
        <span className="close" onClick={() => setID(0)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <Swiper slidesPerView={1} loop initialSlide={id - 1} ref={sliderRef}>
          {data.aboutUsImages.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="img">
                <img src={img.url} alt={img.title} />
                <p>
                  <span>{img.title}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>,
    document.querySelector("#slider")
  );
}

export default SliderImages;
