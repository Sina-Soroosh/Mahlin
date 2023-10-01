import React from "react";
import "./ItemsMenu.css";

function ItemsMenu({ items }) {
  return (
    <ul className="row items-menu">
      {items.map((item) => (
        <li className="col-lg-4 col-md-6" key={item.id}>
          <div className="food">
            <div className="side-right-food">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="side-left-food">
              <p>{item.price} ت</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemsMenu;
