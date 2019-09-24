import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarMenu.scss';

const SidebarMenu = ({ title, path, Icon }, index) => {
  return (
    <NavLink to={path} key={index}>
      <li className="side-bar-menu">
        <Icon />
        <p>{title}</p>
      </li>
    </NavLink>
  )
}

export default SidebarMenu;
