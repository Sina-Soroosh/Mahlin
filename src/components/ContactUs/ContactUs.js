import React, { useRef, useState } from "react";
import "./ContactUs.css";
import Address from "../Address/Address";
import data from "../../data";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ContactUs() {
  const [isSend, setIsSend] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const swal = withReactContent(Swal);

  const sendMessage = (e) => {
    e.preventDefault();

    const emailIsValid = regexPatterns.email.test(emailRef.current.value);

    if (
      emailIsValid &&
      nameRef.current.value.length &&
      messageRef.current.value.length
    ) {
      setIsSend(true);
    } else {
      swal.fire({
        title: "لطفا مقادیر را به دستی وارد کنید",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <div className="contact-us">
      <div className="background">
        <div className="container">
          <p>تماس باما</p>
        </div>
      </div>
      <div className="container-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="row addresses">
                {data.addresses.map((address) => (
                  <Address key={address.id} {...address} />
                ))}
              </ul>
            </div>
            <div className="col-12">
              <div className="title">
                <h4>در تماس باشید</h4>
                <div className="line"></div>
              </div>
              {isSend ? (
                <div className="success-send">
                  <h5>پیام شما با موفقیت ارسال شد</h5>
                </div>
              ) : (
                <form className="send-message row" onSubmit={sendMessage}>
                  <div className="col-md-6">
                    <label htmlFor="name">
                      نام و نام خانوادگی <span>*</span>
                    </label>
                    <input type="text" id="name" ref={nameRef} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">
                      ایمیل <span>*</span>
                    </label>
                    <input type="email" id="email" ref={emailRef} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message">
                      پیام
                      <span>*</span>
                    </label>
                    <textarea id="message" ref={messageRef}></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn">ارسال پیام</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
