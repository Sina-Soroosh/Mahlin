import React from "react";
import data from "../../data";
import Address from "../Address/Address";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="row addresses">
              {data.addresses.map((address) => (
                <Address key={address.id} {...address} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>
          © کپی رایت - رستوران مهلین | توسعه داده شده توسط{" "}
          <a href="mailto:sinasoroosh07@gmail.com">سینا سروش فر</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
