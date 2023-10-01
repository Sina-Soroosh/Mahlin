import React, { useEffect, useRef, useState } from "react";
import "./Reservations.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Reservations() {
  const [selectedDay, setSelectedDay] = useState(utils("fa").getToday());
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const swal = withReactContent(Swal);

  const reservation = (e) => {
    e.preventDefault();

    let emailIsValid = regexPatterns.email.test(emailRef.current.value);

    if (emailIsValid && nameRef.current.value.length) {
      let date = `${selectedDay.year}/${
        selectedDay.month > 10 ? selectedDay.month : "0" + selectedDay.month
      }/${selectedDay.day > 10 ? selectedDay.day : "0" + selectedDay.day}`;

      swal.fire({
        title: "با موفقیت صندلی رزرو شد",
        text: ` منتظر شما در تاریخ  ${date} هستیم`,
        icon: "success",
        confirmButtonText: "باشه",
      });
      emailRef.current.value = "";
      nameRef.current.value = "";
      setSelectedDay(utils("fa").getToday());
    } else {
      swal.fire({
        title: "لطفا مقادیر را به دستی وارد کنید",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <div className="reservations">
      <div className="background">
        <div className="container">
          <p>رزرواسیون</p>
        </div>
      </div>
      <div className="content-reservations">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>
                یک میز انتخاب کنید
                <span className="icon"> & </span>{" "}
                <span> همین حالا رزرو کنید </span>
              </h3>
              <p>ما سفارش شما را از طریق ایمیل تأیید خواهیم کرد</p>
              <p>
                لورم ایپسوم متن ساختگی مهلین با تولید سادگی نامفهوم از صنعت چاپ
                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی.
              </p>
              <form className="reserver row" onSubmit={reservation}>
                <div className="col-sm-6">
                  <label htmlFor="name">
                    نام و نام خانوادگی <span>*</span>
                  </label>
                  <input type="text" id="name" ref={nameRef} />
                </div>
                <div className="col-sm-3">
                  <label htmlFor="email">
                    ایمیل <span>*</span>
                  </label>
                  <input type="email" id="email" ref={emailRef} />
                </div>
                <div className="col-sm-3 date">
                  <label htmlFor="date">
                    تاریخ <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="date"
                    onFocus={() => setIsShowCalendar(true)}
                    value={`${selectedDay.year}/${
                      selectedDay.month > 10
                        ? selectedDay.month
                        : "0" + selectedDay.month
                    }/${
                      selectedDay.day > 10
                        ? selectedDay.day
                        : "0" + selectedDay.day
                    }`}
                    onChange={() => {}}
                  />
                  <div
                    className={isShowCalendar ? "active" : "hidden"}
                    onMouseLeave={() => setIsShowCalendar(false)}
                  >
                    <Calendar
                      value={selectedDay}
                      onChange={setSelectedDay}
                      shouldHighlightWeekends
                      locale="fa"
                      minimumDate={utils("fa").getToday()}
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <label htmlFor="hours">
                    ساعت <span>*</span>
                  </label>
                  <select id="hours">
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <label htmlFor="chairs">
                    صندلی <span>*</span>
                  </label>
                  <select id="chairs">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <label htmlFor="table">
                    میز <span>*</span>
                  </label>
                  <select id="table">
                    <option value="0">هر کدام</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <button className="btn"> رزور کنید</button>
                </div>
              </form>
              <h3 className="mt-5">
                سفارش با
                <span> تلفن</span>
              </h3>
              <p>
                ترجیح می دهید رزرو خود را از طریق تلفن انجام دهید؟ یه زنگ به ما
                بزن! شما می توانید به ما از ساعت ۱۰ صبح تا ۲۲ شب در طول هفته
                تماس بگیرید. شماره تلفن ما 021 12 34 567
              </p>
            </div>
            <div className="col-lg-6">
              <div className="plan">
                <img src="/images/plan.png" alt="plan" />
                <div
                  className="number number-1"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>1</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-2"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>2</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-3"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>3</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-4"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>4</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-5"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>5</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-6"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>6</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-7"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>7</span>
                  <div className="line"></div>
                </div>
                <div
                  className="number number-8"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <span>8</span>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
