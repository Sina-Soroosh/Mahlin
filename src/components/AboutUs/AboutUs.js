import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import "./AboutUs.css";
import "react-tippy/dist/tippy.css";
import data from "../../data";
import SliderImages from "../SliderImages/SliderImages";

function AboutUs() {
  const [idShowImage, setIdShowImage] = useState(0);

  const showImg = (id) => {
    setIdShowImage(id);
  };

  return (
    <>
      {idShowImage ? (
        <SliderImages id={idShowImage} setID={setIdShowImage} />
      ) : null}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <h2>درباره ما</h2>
            <div className="col-md-6">
              <h3>
                اندکی <span>از ما</span>
              </h3>
              <span className="label">اجازه دهید خودمان را معرفی کنیم</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="col-md-6">
              <h3>
                مکانی برای نوشیدن و <span>خوردن</span>
              </h3>
              <span className="label">کار ما از کجا شروع شد…</span>

              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <blockquote>به رستوران مهلین خوش آمدید</blockquote>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="col-12">
              <div className="images row">
                {data.aboutUsImages.map((img, index) => (
                  <Tooltip
                    title={img.title}
                    className="col-md-2 col-4"
                    position="top"
                    arrow
                    size="big"
                    key={img.id}
                  >
                    <div className="img" onClick={() => showImg(index + 1)}>
                      <img src={img.url} alt={img.title} data-aos="zoom-in" />
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
