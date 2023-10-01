import React from "react";
import "./Address.css";

function Address(props) {
  return (
    <li className="col-lg-3 col-md-6">
      <div className="address">
        <h4>
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          مهلین {props.city}
        </h4>
        <p>{props.address}</p>
        <p>{props.phone}</p>
      </div>
    </li>
  );
}

export default Address;
