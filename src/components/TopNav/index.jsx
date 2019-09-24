import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./TopNav.scss";
import ToggleMode from "../ToggleMode";
import UserProfile from "../UserProfile";
import Notification from "../Notification";

const TopNav = ({ history }) => {
  const [toggle, setToggle] = useState(false);
  const path = history.location.pathname;
  const handleToggle = e => {
    console.log("changed");
    setToggle(prevState => !prevState);
  };
  return (
    <div className="nav-wrap">
      <div className="top-nav">
        <div className="page-title">{path.replace("/", "")}</div>
        <div className="nav-menu">
          <ToggleMode status={toggle} handleToggle={handleToggle} />
          <div className="nav-menu__notification">
            <Notification number="1" />
          </div>
          <div>
            <UserProfile name="Oluwatobi Mayowa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopNav);
