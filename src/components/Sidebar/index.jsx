import React from "react";
import "./Sidebar.scss";
import SidebarMenu from "../SidebarMenu";
import menuDatas from "./fixture";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__header">
        <div className="side-bar__header__icon">
          <p>B</p>
        </div>
        <div className="side-bar__header__business-name">
          <p>Business name </p>{" "}
          <svg
            width="8"
            height="7"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8501 0.824674L14.0987 0.137502C13.9985 0.0457376 13.8832 0 13.7528 0C13.6227 0 13.5074 0.0457376 13.4073 0.137502L7.50008 5.53951L1.59313 0.137646C1.49295 0.0458822 1.37766 0.000144355 1.24742 0.000144355C1.11712 0.000144355 1.00183 0.0458822 0.901698 0.137646L0.150353 0.824867C0.0500125 0.916438 0 1.02188 0 1.14103C0 1.2601 0.0501704 1.36553 0.150353 1.45711L7.15436 7.86259C7.25449 7.95421 7.36984 8 7.50008 8C7.63032 8 7.74546 7.95421 7.84553 7.86259L14.8501 1.45711C14.9503 1.36549 15 1.26005 15 1.14103C15 1.02188 14.9503 0.916439 14.8501 0.824674Z"
              fill="#42526e"
            />
          </svg>{" "}
        </div>
      </div>
      <ul className="side-bar__side-menu">
        {menuDatas.map(({ title, icon, path }, index) => (
          <SidebarMenu path={path} Icon={icon} title={title} key={index} />
        ))}
      </ul>
      <div className="side-bar__accept-btn">
        <div className="button">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1569154389/Bitmap_Copy.png"
            alt=""
          />
          <span>Accept payment</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
