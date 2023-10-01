import React from "react";
import "./Menus.css";
import ItemsMenu from "../ItemsMenu/ItemsMenu";
import data from "../../data";

function Menus() {
  return (
    <div className="menus">
      <div className="background">
        <div className="container">
          <p>منوهای ما</p>
        </div>
      </div>
      <div className="container content-menus">
        <div className="row">
          {data.foods.map((menu) => (
            <div className="col-12" key={menu.id}>
              <div className="list-menu">
                <h3>
                  {menu.isDrink ? "نوشیدنی ها" : "منوی"}{" "}
                  <span>{menu.title}</span>
                </h3>
                <ItemsMenu items={menu.items} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
